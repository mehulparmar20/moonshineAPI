import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
  ],
  providers: [UsersService, AuthService, LocalStrategy],
  controllers: [UsersController],
})
export class UsersModule {}
