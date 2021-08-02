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


import { LoyaltyAccountId } from './loyaltyAccountId';
import { LoyaltyAmount } from './loyaltyAmount';
import { TransactionIdentification } from './transactionIdentification';

export class LoyaltyData {
    'CardAcquisitionReference'?: TransactionIdentification;
    'LoyaltyAccountID'?: LoyaltyAccountId;
    'LoyaltyAmount'?: LoyaltyAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "LoyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        },
        {
            "name": "LoyaltyAmount",
            "baseName": "LoyaltyAmount",
            "type": "LoyaltyAmount"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyData.attributeTypeMap;
    }
}

