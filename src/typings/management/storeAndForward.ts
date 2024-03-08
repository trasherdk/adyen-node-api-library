/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MinorUnitsMonetaryValue } from './minorUnitsMonetaryValue';
import { SupportedCardTypes } from './supportedCardTypes';

export class StoreAndForward {
    /**
    * The maximum amount that the terminal accepts for a single store-and-forward payment.
    */
    'maxAmount'?: Array<MinorUnitsMonetaryValue>;
    /**
    * The maximum number of store-and-forward transactions per terminal that you can process while offline.
    */
    'maxPayments'?: number;
    'supportedCardTypes'?: SupportedCardTypes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxAmount",
            "baseName": "maxAmount",
            "type": "Array<MinorUnitsMonetaryValue>"
        },
        {
            "name": "maxPayments",
            "baseName": "maxPayments",
            "type": "number"
        },
        {
            "name": "supportedCardTypes",
            "baseName": "supportedCardTypes",
            "type": "SupportedCardTypes"
        }    ];

    static getAttributeTypeMap() {
        return StoreAndForward.attributeTypeMap;
    }
}

