import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { StrategyOptionsWithRequest } from 'passport-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '190778205087-n2gq3rl734sd735m7uvudo0tunm4ia5d.apps.googleusercontent.com',
      clientSecret: '6GUMKMLAkIU-vkuPsuAdLMKo',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    } as StrategyOptionsWithRequest);
  }

  async validate(
    _: Request,
    __: string,
    ___: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(profile);

    try {
      //
      done(null, { id: 'userId' });
    } catch (err) {
      done(err, false);
    }
  }
}
