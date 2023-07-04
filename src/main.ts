import { newServer } from './newServer.js';
import { startStandaloneServer } from '@apollo/server/standalone';

const { url } = await startStandaloneServer(newServer, {
  context: async ({ req }) => ({ req }),
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
