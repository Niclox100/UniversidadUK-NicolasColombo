import { MongoClient } from 'mongodb';

import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from "../../config"
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName} = configService.mongo
        const uri = `${connection}://${user}:${password}@${host}:${port}/`;
        return {
          uri,
          user,
          pass: password,
          dbName,
        }
      },
      inject: [config.KEY]
    })
  ],
  providers: [
    {
      provide: "MONGO",
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port} = configService.mongo
        const uri = `${connection}://${user}:${password}@${host}:${port}/`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db("universidadUK-db");
        return database;
      },
      inject: [config.KEY]
    },
  ],
  exports: ["MONGO", MongooseModule]
})
export class DatabaseModule {}
