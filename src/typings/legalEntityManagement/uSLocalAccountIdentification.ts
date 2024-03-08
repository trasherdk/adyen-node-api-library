/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class USLocalAccountIdentification {
    /**
    * The bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The bank account type.  Possible values: **checking** or **savings**. Defaults to **checking**.
    */
    'accountType'?: USLocalAccountIdentification.AccountTypeEnum;
    /**
    * Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts.   Adyen creates a local IBAN for business accounts when the `formFactor`å value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.
    */
    'formFactor'?: string | null;
    /**
    * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.
    */
    'routingNumber': string;
    /**
    * **usLocal**
    */
    'type': USLocalAccountIdentification.TypeEnum;

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
            "type": "USLocalAccountIdentification.AccountTypeEnum"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "string | null"
        },
        {
            "name": "routingNumber",
            "baseName": "routingNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "USLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return USLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace USLocalAccountIdentification {
    export enum AccountTypeEnum {
        Checking = 'checking',
        Savings = 'savings'
    }
    export enum TypeEnum {
        UsLocal = 'usLocal'
    }
}
