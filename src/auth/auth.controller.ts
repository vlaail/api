import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){ }

    @Get('signup')
    signup(){
        return 'Sign up!';
    }

    @Post('signin')
    signin(){
        return 'You are signed in!';
    }

}