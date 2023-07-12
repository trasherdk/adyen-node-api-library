/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BulkAddress } from './bulkAddress';

export class CardConfiguration {
    /**
    * Overrides the activation label design ID defined in the `configurationProfileId`. The activation label is attached to the card and contains the activation instructions.
    */
    'activation'?: string;
    /**
    * Your app\'s URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process.   Maximum length: 255 characters.
    */
    'activationUrl'?: string;
    'bulkAddress'?: BulkAddress;
    /**
    * The ID of the card image. This is the image that will be printed on the full front of the card.
    */
    'cardImageId'?: string;
    /**
    * Overrides the carrier design ID defined in the `configurationProfileId`. The carrier is the letter or packaging to which the card is attached.
    */
    'carrier'?: string;
    /**
    * The ID of the carrier image. This is the image that will printed on the letter to which the card is attached.
    */
    'carrierImageId'?: string;
    /**
    * The ID of the card configuration profile that contains the settings of the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment. All the settings in the profile are applied to the card, unless you provide other fields to override them.  For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.
    */
    'configurationProfileId': string;
    /**
    * The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.
    */
    'currency'?: string;
    /**
    * Overrides the envelope design ID defined in the `configurationProfileId`. 
    */
    'envelope'?: string;
    /**
    * Overrides the insert design ID defined in the `configurationProfileId`. An insert is any additional material, such as marketing materials, that are shipped together with the card.
    */
    'insert'?: string;
    /**
    * The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.
    */
    'language'?: string;
    /**
    * The ID of the logo image. This is the image that will be printed on the partial front of the card, such as a logo on the upper right corner.
    */
    'logoImageId'?: string;
    /**
    * Overrides the PIN mailer design ID defined in the `configurationProfileId`. The PIN mailer is the letter on which the PIN is printed.
    */
    'pinMailer'?: string;
    /**
    * Overrides the logistics company defined in the `configurationProfileId`.
    */
    'shipmentMethod'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activation",
            "baseName": "activation",
            "type": "string"
        },
        {
            "name": "activationUrl",
            "baseName": "activationUrl",
            "type": "string"
        },
        {
            "name": "bulkAddress",
            "baseName": "bulkAddress",
            "type": "BulkAddress"
        },
        {
            "name": "cardImageId",
            "baseName": "cardImageId",
            "type": "string"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string"
        },
        {
            "name": "carrierImageId",
            "baseName": "carrierImageId",
            "type": "string"
        },
        {
            "name": "configurationProfileId",
            "baseName": "configurationProfileId",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "envelope",
            "baseName": "envelope",
            "type": "string"
        },
        {
            "name": "insert",
            "baseName": "insert",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "logoImageId",
            "baseName": "logoImageId",
            "type": "string"
        },
        {
            "name": "pinMailer",
            "baseName": "pinMailer",
            "type": "string"
        },
        {
            "name": "shipmentMethod",
            "baseName": "shipmentMethod",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardConfiguration.attributeTypeMap;
    }
}

