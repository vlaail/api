import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import * as FabricCAServices from 'fabric-ca-client';
import { Wallets, X509Identity,  } from 'fabric-network';
import { InternalServerErrorException } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';


@Injectable()
export class AdminService{

    constructor(private configService: ConfigService, private walletService: WalletService){}

    async enrollAdmin(){
        try {
            console.log('enrollAdmin');
            const orgConnectionSetting = this.configService.get('orgConnectionSetting');        
            // Create a new CA client for interacting with the CA.
            const caInfo = orgConnectionSetting.certificateAuthorities['org1ca-api.127-0-0-1.nip.io:8080'];
            //const caTLSCACerts = caInfo.tlsCACerts.pem;
            const ca = new FabricCAServices(caInfo.url);
            // Create a new file system based wallet for managing identities.
            //const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = await this.walletService.getWallet();    
            //console.log(`Wallet path: ${walletPath}`);
            const adminExists = await wallet.get('admin');
            if (adminExists) {
                return false;
            }
            // Enroll the admin user, and import the new identity into the wallet.
            //const enrollment = await ca.enroll({ enrollmentID: admins[0].username, enrollmentSecret: admins[0].secret });
            //console.log(client.getMspid());
            const enrollment = await ca.enroll({ enrollmentID: 'admin', enrollmentSecret: 'adminpw' });
            console.log(enrollment);
            const x509Identity: X509Identity = {
                credentials: {
                    certificate: enrollment.certificate,
                    privateKey: enrollment.key.toBytes(),
                },
                mspId: 'Org1MSP',
                type: 'X.509',
            };
            await wallet.put('admin', x509Identity);
            console.log('Successfully enrolled admin user "admin" and imported it into the wallet');
            return true;
        } catch (error) {
            //Logger.error(`${new Date().toLocaleString()}: [${controller}] Failed to enroll admin user admin.`, error);
            console.error(`Failed to enroll admin user "admin": ${error}`);
            throw new InternalServerErrorException(`Failed to enroll admin user "admin": ${error}`);
        }
    }
}