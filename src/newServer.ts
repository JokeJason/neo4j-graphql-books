import { ApolloServer } from '@apollo/server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { gql } from 'graphql-tag';
import neo4j from 'neo4j-driver';
import 'dotenv/config';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;

const driver = neo4j.driver(
  process.env.DB_URI,
  neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASSWORD),
);

const newSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

export const newServer = new ApolloServer({
  schema: await newSchema.getSchema(),
});