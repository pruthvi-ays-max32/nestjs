import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { user } from './user/entities/user.entity';

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Sakshi@227',
    database:'eightwitches',
    synchronize:true,
    entities:[user]
  }),
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
