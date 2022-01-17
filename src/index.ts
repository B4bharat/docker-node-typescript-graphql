import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import { buildSchema } from 'type-graphql';

import { RecipeResolver } from './recipe/recipe-resolver';
import { JobResolver } from './job/job-resolver';
import { EmployerResolver } from './employer/employer-resolver';

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [RecipeResolver, JobResolver, EmployerResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
  });

  // Start the server
  const { url } = await server.listen(5000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
