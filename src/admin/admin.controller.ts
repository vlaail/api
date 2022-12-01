import { Controller, Get, HttpCode, HttpStatus, Post, Query, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";


@Controller('admin')
export class AdminController{

    
    @Post()
    enrollAdmin(@Req() request: Request) {
        //console.log(request.body.entry[0].changes);
        return 'EnrollAdmin()';        
    }
}