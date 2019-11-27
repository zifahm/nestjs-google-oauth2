import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { StrategyOptionsWithRequest } from 'passport-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID, // <- Replace this with your client id
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // <- Replace this with your client secret
      callbackURL: `${process.env.BACKEND_HOST}/auth/google/callback`,
      passReqToCallback: true,
      scope: ['profile', 'email'],
      //         session:false
    } as StrategyOptionsWithRequest);
  }

  async validate(
    _: Request,
    __: string,
    ___: string,
    profile: any,
    done: (error: any, payload: any) => void,
  ) {
    const {
      sub: googleId,
      email,
      given_name: userName,
    }: { sub: string; email: string; given_name: string } = profile._json;
    console.log(profile);

    try {
      // do login above
      return done(null, { id: 'randomId' });
    } catch (err) {
      // console.log(err)
      console.log('caught error');

      done(err, false);
    }
  }
}
