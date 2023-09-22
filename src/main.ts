import 'reflect-metadata';
import clustering from './clustering';
import fastify from 'fastify';
import mercurius from 'mercurius';
import cors from '@fastify/cors';
import { Arg, Int, Query, Resolver, buildSchema } from 'type-graphql';

@Resolver()
class AddResolver {
  @Query(() => Int)
  add(@Arg('x', () => Int) x: number, @Arg('y', () => Int) y: number): number {
    return x + y;
  }
}

async function bootstrap() {
  const server = fastify();

  await server.register(cors);

  server.register(mercurius, {
    schema: await buildSchema({
      resolvers: [AddResolver],
      validate: false,
    }),
    graphiql: true,
    jit: 1,
  });

  await server.listen({ port: 3000, host: '0.0.0.0' });
}

clustering(bootstrap, 9);
