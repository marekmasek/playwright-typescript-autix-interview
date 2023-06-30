import {Environment} from "../enums/environment";
import * as fs from "fs";

export class TestProperties {

    static readonly ENV_FILE_PATH = `./props/env/${process.env.ENV}.env`

    private static env: Environment;
    private static url: string;
    private static supportUrl: string;

    private static setEnv(): void {
        this.env = Environment[this.getProp('ENV', true).toUpperCase()];
    }

    public static setUrl(): void {
        this.url = this.getProp('URL', true);
    }

    public static setSupportUrl(): void {
        this.supportUrl = this.getProp('SUPPORT_URL', true);
    }

    public static getEnv(): Environment {
        return this.env;
    }

    public static getUrl(): string {
        return this.url;
    }

    public static getSupportUrl(): string {
        return this.supportUrl;
    }

    private static getProp(propKey: string, required: boolean): string {
        let prop = process.env[propKey];
        if (required && (!prop || prop === '')) {
            throw new Error(`Property: ${propKey} is required, but it's not set in ${this.ENV_FILE_PATH}`);
        }
        return prop;
    }

    public static setEnvProps(): void {
        if (!process.env.ENV || process.env.ENV === '') {
            throw new Error('ENV variable is not set');
        } else if (!(process.env.ENV.toUpperCase() in Environment)) {
            throw new Error(`ENV: ${process.env.ENV.toUpperCase()} is not one defined in environment.ts enum. \n` +
                'It has to be one of the following: ' + Object.keys(Environment).filter(x => isNaN(parseInt(x))));
        }

        //check if env file exists
        try {
            fs.accessSync(this.ENV_FILE_PATH, fs.constants.R_OK);
        } catch (error) {
            throw new Error(`ENV file: ${this.ENV_FILE_PATH} doesn't exist`);
        }

        //load properties from file to env variables
        require('dotenv').config({path: this.ENV_FILE_PATH});

        //set variables
        this.setEnv();
        this.setUrl();
        this.setSupportUrl();

        console.log(`Running tests on environment: ${Environment[this.getEnv()]}`);
    }

}