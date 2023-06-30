import {Enumify} from "enumify";

export class Localization extends Enumify {

    static EN = new Localization("English", "en", "en-GB");
    static CS = new Localization("Czech", "cs", "cs-CZ");
    static PL = new Localization("Polish", "pl", "pl-PL");
    static _ = Localization.closeEnum();

    value: string;
    isoCode: string;
    htmlLang: string;

    constructor(value: string, isoCode: string, htmlLang: string) {
        super();
        this.value = value;
        this.isoCode = isoCode;
        this.htmlLang = htmlLang;
    }
}
