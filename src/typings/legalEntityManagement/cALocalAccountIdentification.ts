/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CALocalAccountIdentification {
    /**
    * The 5- to 12-digit bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The bank account type.  Possible values: **checking** or **savings**. Defaults to **checking**.
    */
    'accountType'?: CALocalAccountIdentification.AccountTypeEnum;
    /**
    * Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts.   Adyen creates a local IBAN for business accounts when the `formFactor`å value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.
    */
    'formFactor'?: string | null;
    /**
    * The 3-digit institution number, without separators or whitespace.
    */
    'institutionNumber': string;
    /**
    * The 5-digit transit number, without separators or whitespace.
    */
    'transitNumber': string;
    /**
    * **caLocal**
    */
    'type': CALocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "CALocalAccountIdentification.AccountTypeEnum"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "string | null"
        },
        {
            "name": "institutionNumber",
            "baseName": "institutionNumber",
            "type": "string"
        },
        {
            "name": "transitNumber",
            "baseName": "transitNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CALocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CALocalAccountIdentification.attributeTypeMap;
    }
}

export namespace CALocalAccountIdentification {
    export enum AccountTypeEnum {
        Checking = 'checking',
        Savings = 'savings'
    }
    export enum TypeEnum {
        CaLocal = 'caLocal'
    }
}
