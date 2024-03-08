/*
 * The version of the OpenAPI document: v2
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
    * The form factor of the account.  Possible values: **physical**, **virtual**. Default value: **physical**.
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
