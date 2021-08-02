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


import { ICCResetData } from './iCCResetData';
import { Response } from './response';
import { TrackData } from './trackData';

export class CardReaderInitResponse {
    'EntryMode'?: Array<CardReaderInitResponse.EntryModeEnum>;
    'ICCResetData'?: ICCResetData;
    'Response': Response;
    'TrackData'?: Array<TrackData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EntryMode",
            "baseName": "EntryMode",
            "type": "Array<CardReaderInitResponse.EntryModeEnum>"
        },
        {
            "name": "ICCResetData",
            "baseName": "ICCResetData",
            "type": "ICCResetData"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "TrackData",
            "baseName": "TrackData",
            "type": "Array<TrackData>"
        }    ];

    static getAttributeTypeMap() {
        return CardReaderInitResponse.attributeTypeMap;
    }
}

export namespace CardReaderInitResponse {
    export enum EntryModeEnum {
        Contactless = <any> 'Contactless',
        File = <any> 'File',
        Icc = <any> 'ICC',
        Keyed = <any> 'Keyed',
        MagStripe = <any> 'MagStripe',
        Manual = <any> 'Manual',
        Mobile = <any> 'Mobile',
        Rfid = <any> 'RFID',
        Scanned = <any> 'Scanned',
        SynchronousIcc = <any> 'SynchronousICC',
        Tapped = <any> 'Tapped'
    }
}
