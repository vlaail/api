import { Controller, Get, HttpCode, HttpStatus, Post, Query, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";


@Controller()
export class WebhookController{

    @Get('signup')
    signup(){
        return 'Sign up!';
    }

    @Post('signin')
    signin(){
        return 'You are signed in!';
    }

    @Get('x')
    verifyToken(@Query() query: any){
        if (query['hub.mode'] == 'subscribe' && query['hub.verify_token'] == 'testtoken') {
            return query['hub.challenge'];
        } 
        else {
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post()
    processMessage(@Req() request: Request){
        console.log(request.body.entry[0].changes);
        return true;
    }
}