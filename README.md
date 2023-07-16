# neo4j-graphql-books

This is a simple practise project of a GraphQL API backed by a Neo4j database. The major purpose of this project is to

1. Create Apollo Server with Neo4j GraphQL integration
2. Create integration tests following [Apollo Docs: Testing using executeOperation](https://www.apollographql.com/docs/apollo-server/testing/testing/#testing-using-executeoperation)

This project is bootstrapped using [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)

## Context

Apollo Server is a powerful GraphQL server that can be used with many different data sources. With [Neo4j GraphQL library](https://neo4j.com/docs/graphql-manual/current/getting-started/), it's even more powerful.

Developer just need specify datatype and relationship in GraphQL schema, and Neo4j GraphQL library will generate the resolvers automatically for you. It greatly reduce boilerplate code.

But there is not much information about how to write integration tests for Apollo Server with Neo4j GraphQL library. This project demonstrate how to write integration tests using Apollo Server's [`executeOperation` function](https://www.apollographql.com/docs/apollo-server/testing/testing/).

## Getting Started

Run the project following step

1. Switch node version by `nvm use`
2. Build: `npm run build`
3. Start: `npm run start`

Run test

1. `npm run test`

## References

* [Create a TypeScript Apollo Server and Live Database with Unit Tests](https://neo4j.com/developer-blog/create-a-typescript-apollo-server-and-live-database-with-unit-tests/)