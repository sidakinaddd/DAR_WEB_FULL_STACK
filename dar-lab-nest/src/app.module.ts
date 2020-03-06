import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/User';
import { Connection } from 'typeorm';
@Module({
  
  imports :[
    TypeOrmModule.forRoot({
        type:'mysql',
        host: '217.182.72.53',
        username: "dana",
        password: "VifaLAB7",
        database:"danaDB",
        entities: [User]
    }),
    UsersModule
  ],
  controllers: [AppController, MathController],
  providers: [AppService],
})
export class AppModule {

}
