import { Module } from '@nestjs/common';
import { UserModule } from './users/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'alfaro99',
        database: 'usernest',
        /* host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME, */
        //entities: [__dirname + '/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
      }
    ),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
