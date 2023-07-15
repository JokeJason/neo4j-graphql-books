import assert = require('node:assert');

import { createServer } from './newServer.js';

it('returns hello with the provided name', async () => {
  const newServer = await createServer();
  const response = await newServer.executeOperation({
    query: 'query ExampleQuery { books { title, author }}',
    variables: {},
  });

  // Note the use of Node's assert rather than Jest's expect; if using
  // TypeScript, `assert`` will appropriately narrow the type of `body`
  // and `expect` will not.
  assert(response.body.kind === 'single');

  expect(response.body.singleResult.errors).toBeUndefined();
  expect(response.body.singleResult.data?.books).toHaveLength(3);
  expect(response.body.singleResult.data?.books[0]).toEqual({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  });
});
