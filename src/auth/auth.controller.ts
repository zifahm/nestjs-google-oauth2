import { Controller, Get, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response as Res } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('google'))
  @Get('google')
  googleLogin() {
    //
  }

  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  googleCallback(@Response() res: Res) {
    res.send('ok');
  }
}
