import assert = require('node:assert');

import { createServer } from './newServer.js';

describe('Neo4j GraphQL integration tests', () => {
  let newServer;

  beforeAll(async () => {
    newServer = await createServer();

    // clear database about books
    await newServer.executeOperation({
      query: `mutation DeleteBooks {
        deleteBooks {
          nodesDeleted
        }
      }`,
      variables: {},
    });
  });

  it('After initialization, there should be no data in the database', async () => {
    const response = await newServer.executeOperation({
      query: `query {
        books {
          title
          author
        }
      }`,
      variables: {},
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.books).toHaveLength(0);
  });

  it('Add books into database', async () => {
    const response = await newServer.executeOperation({
      query: `mutation CreateBooks($input: [BookCreateInput!]!) {
        createBooks(input: $input) {
          books {
            author
            title
          }
        }
      }`,
      variables: {
        input: [
          {
            title: 'Harry Potter',
            author: 'JK R',
          },
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
          },
          {
            title: 'The Two Towers',
            author: 'JRR Tolkien',
          },
        ],
      },
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.createBooks?.books).toHaveLength(3);
    expect(response.body.singleResult.data?.createBooks?.books[0]).toEqual({
      title: 'Harry Potter',
      author: 'JK R',
    });
  });
});
