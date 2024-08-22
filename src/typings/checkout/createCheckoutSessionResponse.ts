/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountInfo } from './accountInfo';
import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { BillingAddress } from './billingAddress';
import { CheckoutSessionInstallmentOption } from './checkoutSessionInstallmentOption';
import { CheckoutSessionThreeDS2RequestData } from './checkoutSessionThreeDS2RequestData';
import { Company } from './company';
import { DeliveryAddress } from './deliveryAddress';
import { FundOrigin } from './fundOrigin';
import { FundRecipient } from './fundRecipient';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { Name } from './name';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { RiskData } from './riskData';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';

export class CreateCheckoutSessionResponse {
    'accountInfo'?: AccountInfo;
    'additionalAmount'?: Amount;
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'authenticationData'?: AuthenticationData;
    'billingAddress'?: BillingAddress;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * **iOS** * **Android** * **Web**
    */
    'channel'?: CreateCheckoutSessionResponse.ChannelEnum;
    'company'?: Company;
    /**
    * The shopper\'s two-letter country code.
    */
    'countryCode'?: string;
    /**
    * The shopper\'s date of birth in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
    */
    'dateOfBirth'?: Date;
    /**
    * The date and time when the purchased goods should be delivered.  [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
    */
    'deliverAt'?: Date;
    'deliveryAddress'?: DeliveryAddress;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.
    */
    'expiresAt': Date;
    'fundOrigin'?: FundOrigin;
    'fundRecipient'?: FundRecipient;
    /**
    * A unique identifier of the session.
    */
    'id': string;
    /**
    * A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.
    */
    'installmentOptions'?: { [key: string]: CheckoutSessionInstallmentOption; };
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    'mandate'?: Mandate;
    /**
    * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
    */
    'mcc'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
    */
    'merchantOrderReference'?: string;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. * Maximum 20 characters per key. * Maximum 80 characters per value. 
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Indicates the type of front end integration. Possible values: * **embedded** (default): Drop-in or Components integration * **hosted**: Hosted Checkout integration
    */
    'mode'?: CreateCheckoutSessionResponse.ModeEnum;
    'mpiData'?: ThreeDSecureData;
    'platformChargebackLogic'?: PlatformChargebackLogic;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * Defines a recurring payment type. Required when creating a token to store payment details. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: CreateCheckoutSessionResponse.RecurringProcessingModelEnum;
    /**
    * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
    */
    'redirectFromIssuerMethod'?: string;
    /**
    * Specifies the redirect method (GET or POST) when redirecting to the issuer.
    */
    'redirectToIssuerMethod'?: string;
    /**
    * The reference to uniquely identify a payment.
    */
    'reference': string;
    /**
    * The URL to return to in case of a redirection. The format depends on the channel.  * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name` If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value. > The URL must not include personally identifiable information (PII), for example name or email address.
    */
    'returnUrl': string;
    'riskData'?: RiskData;
    /**
    * The payment session data you need to pass to your front end.
    */
    'sessionData'?: string;
    /**
    * The shopper\'s email address.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: CreateCheckoutSessionResponse.ShopperInteractionEnum;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    /**
    * The text to be shown on the shopper\'s bank statement.  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , \' _ - ? + * /_**.
    */
    'shopperStatement'?: string;
    /**
    * Set to true to show the payment amount per installment.
    */
    'showInstallmentAmount'?: boolean;
    /**
    * Set to **true** to show a button that lets the shopper remove a stored payment method.
    */
    'showRemovePaymentMethodButton'?: boolean;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * Boolean value indicating whether the card payment method should be split into separate debit and credit options.
    */
    'splitCardFundingSources'?: boolean;
    /**
    * An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
    */
    'splits'?: Array<Split>;
    /**
    * Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.
    */
    'store'?: string;
    /**
    * Specifies how payment methods should be filtered based on the \'store\' parameter:   - \'exclusive\': Only payment methods belonging to the specified \'store\' are returned.   - \'inclusive\': Payment methods from the \'store\' and those not associated with any other store are returned.
    */
    'storeFiltrationMode'?: CreateCheckoutSessionResponse.StoreFiltrationModeEnum;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).
    */
    'storePaymentMethod'?: boolean;
    /**
    * Indicates if the details of the payment method will be stored for the shopper. Possible values: * **disabled** – No details will be stored (default). * **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored. * **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.
    */
    'storePaymentMethodMode'?: CreateCheckoutSessionResponse.StorePaymentMethodModeEnum;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    /**
    * Sets a custom theme for [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout). The value can be any of the **Theme ID** values from your Customer Area.
    */
    'themeId'?: string;
    'threeDS2RequestData'?: CheckoutSessionThreeDS2RequestData;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;
    /**
    * The URL for the Hosted Checkout page. Redirect the shopper to this URL so they can make the payment.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountInfo",
            "baseName": "accountInfo",
            "type": "AccountInfo"
        },
        {
            "name": "additionalAmount",
            "baseName": "additionalAmount",
            "type": "Amount"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "authenticationData",
            "baseName": "authenticationData",
            "type": "AuthenticationData"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "BillingAddress"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "captureDelayHours",
            "baseName": "captureDelayHours",
            "type": "number"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "CreateCheckoutSessionResponse.ChannelEnum"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date"
        },
        {
            "name": "deliverAt",
            "baseName": "deliverAt",
            "type": "Date"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "DeliveryAddress"
        },
        {
            "name": "enableOneClick",
            "baseName": "enableOneClick",
            "type": "boolean"
        },
        {
            "name": "enablePayOut",
            "baseName": "enablePayOut",
            "type": "boolean"
        },
        {
            "name": "enableRecurring",
            "baseName": "enableRecurring",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "fundOrigin",
            "baseName": "fundOrigin",
            "type": "FundOrigin"
        },
        {
            "name": "fundRecipient",
            "baseName": "fundRecipient",
            "type": "FundRecipient"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "installmentOptions",
            "baseName": "installmentOptions",
            "type": "{ [key: string]: CheckoutSessionInstallmentOption; }"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "mandate",
            "baseName": "mandate",
            "type": "Mandate"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantOrderReference",
            "baseName": "merchantOrderReference",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "CreateCheckoutSessionResponse.ModeEnum"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "platformChargebackLogic",
            "baseName": "platformChargebackLogic",
            "type": "PlatformChargebackLogic"
        },
        {
            "name": "recurringExpiry",
            "baseName": "recurringExpiry",
            "type": "string"
        },
        {
            "name": "recurringFrequency",
            "baseName": "recurringFrequency",
            "type": "string"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "CreateCheckoutSessionResponse.RecurringProcessingModelEnum"
        },
        {
            "name": "redirectFromIssuerMethod",
            "baseName": "redirectFromIssuerMethod",
            "type": "string"
        },
        {
            "name": "redirectToIssuerMethod",
            "baseName": "redirectToIssuerMethod",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
        },
        {
            "name": "sessionData",
            "baseName": "sessionData",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperIP",
            "baseName": "shopperIP",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "CreateCheckoutSessionResponse.ShopperInteractionEnum"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "showInstallmentAmount",
            "baseName": "showInstallmentAmount",
            "type": "boolean"
        },
        {
            "name": "showRemovePaymentMethodButton",
            "baseName": "showRemovePaymentMethodButton",
            "type": "boolean"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "splitCardFundingSources",
            "baseName": "splitCardFundingSources",
            "type": "boolean"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storeFiltrationMode",
            "baseName": "storeFiltrationMode",
            "type": "CreateCheckoutSessionResponse.StoreFiltrationModeEnum"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        },
        {
            "name": "storePaymentMethodMode",
            "baseName": "storePaymentMethodMode",
            "type": "CreateCheckoutSessionResponse.StorePaymentMethodModeEnum"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "themeId",
            "baseName": "themeId",
            "type": "string"
        },
        {
            "name": "threeDS2RequestData",
            "baseName": "threeDS2RequestData",
            "type": "CheckoutSessionThreeDS2RequestData"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        },
        {
            "name": "trustedShopper",
            "baseName": "trustedShopper",
            "type": "boolean"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateCheckoutSessionResponse.attributeTypeMap;
    }
}

export namespace CreateCheckoutSessionResponse {
    export enum ChannelEnum {
        IOs = 'iOS',
        Android = 'Android',
        Web = 'Web'
    }
    export enum ModeEnum {
        Embedded = 'embedded',
        Hosted = 'hosted'
    }
    export enum RecurringProcessingModelEnum {
        CardOnFile = 'CardOnFile',
        Subscription = 'Subscription',
        UnscheduledCardOnFile = 'UnscheduledCardOnFile'
    }
    export enum ShopperInteractionEnum {
        Ecommerce = 'Ecommerce',
        ContAuth = 'ContAuth',
        Moto = 'Moto',
        Pos = 'POS'
    }
    export enum StoreFiltrationModeEnum {
        Exclusive = 'exclusive',
        Inclusive = 'inclusive',
        SkipFilter = 'skipFilter'
    }
    export enum StorePaymentMethodModeEnum {
        AskForConsent = 'askForConsent',
        Disabled = 'disabled',
        Enabled = 'enabled'
    }
}
