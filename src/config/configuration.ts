//import * as local from './local/config.json';
import fs from 'fs';
import * as path from 'path';
import { Config } from './dev/Config'

export default () => {
    if(process.env.Config !== undefined){
        return JSON.parse(process.env.Config);
    }
    else{
        return Config;
    }   
};