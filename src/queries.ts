export const DeleteBooks = `mutation DeleteBooks {
  deleteBooks {
      nodesDeleted
    }
  }`;

export const QueryBooks = `query QueryBooks {
  books {
    title
    author
  }
}`;

export const CreateBooks = `mutation CreateBooks($input: [BookCreateInput!]!) {
  createBooks(input: $input) {
    books {
      author
      title
    }
  }
}`;
