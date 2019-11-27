import { Controller, Get, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response as Res } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    //
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Response() res: Res) {
    console.log('callback');
    // handles the Google OAuth2 callback
    res.send('ok');

    //    res.redirect(`${process.env.FRONTEND_HOST}`);
  }
}
