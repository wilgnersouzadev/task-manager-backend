import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User) {
    const validatedUser = await this.authService.validateUser(
      user.email,
      user.password,
    );
    if (!validatedUser) {
      throw new UnauthorizedException();
    }
    return this.authService.login(validatedUser);
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
}
