import { Module } from '@nestjs/common';
import { PostModule } from './post.module';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PostModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
