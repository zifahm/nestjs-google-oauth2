import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
  imports: [PassportModule.register({ session: false })],
})
export class AuthModule {}
