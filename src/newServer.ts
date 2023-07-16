import { ApolloServer } from '@apollo/server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import 'dotenv/config';

import { typeDefs } from './typeDefs.js';

const driver = neo4j.driver(
  process.env.DB_URI,
  neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASSWORD),
);

const newSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

export async function createServer() {
  return new ApolloServer({
    schema: await newSchema.getSchema(),
  });
}
