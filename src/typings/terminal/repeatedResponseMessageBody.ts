/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { PaymentResponse } from './paymentResponse';
import { ReversalResponse } from './reversalResponse';
import { StoredValueResponse } from './storedValueResponse';

export class RepeatedResponseMessageBody {
    'CardAcquisitionResponse'?: CardAcquisitionResponse;
    'CardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'LoyaltyResponse'?: LoyaltyResponse;
    'PaymentResponse'?: PaymentResponse;
    'ReversalResponse'?: ReversalResponse;
    'StoredValueResponse'?: StoredValueResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "CardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "LoyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "PaymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "ReversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "StoredValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        }    ];

    static getAttributeTypeMap() {
        return RepeatedResponseMessageBody.attributeTypeMap;
    }
}

