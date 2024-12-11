import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthServiceCommon } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly authService: AuthServiceCommon,
    private readonly jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();
      const authHeader: string = request.headers?.authorization;

      if (!authHeader) {
        return false;
      }

      const token = authHeader.split(' ')[1];
      const data = this.jwtService.verify(token, { secret: 'test' });
      const userDetails = await this.authService.getUserByEmail(data.email);

      request['user'] = userDetails;

      return true;
    } catch (error) {
      throw error;
    }
  }
}
