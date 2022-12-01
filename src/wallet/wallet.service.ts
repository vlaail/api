import { Wallet, Wallets, X509Identity,  } from 'fabric-network';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class WalletService{
    private _wallet: Wallet;
    //private readonly _configService: any;
    constructor(private configService:ConfigService){}

    async getWallet(): Promise<Wallet>{
        if(this._wallet == null){
            const walletPath = await this.configService.get<string>('walletPath');
            this._wallet = await Wallets.newFileSystemWallet(walletPath);
        }
        return this._wallet;
    }
}