/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalCommission } from './additionalCommission';
import { Commission } from './commission';

export class SplitConfigurationLogic {
    /**
    * Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'acquiringFees'?: SplitConfigurationLogic.AcquiringFeesEnum;
    'additionalCommission'?: AdditionalCommission;
    /**
    * Deducts the transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenCommission'?: SplitConfigurationLogic.AdyenCommissionEnum;
    /**
    * Deducts the fees due to Adyen (markup or commission) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenFees'?: SplitConfigurationLogic.AdyenFeesEnum;
    /**
    * Deducts the transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/what-is-interchange) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenMarkup'?: SplitConfigurationLogic.AdyenMarkupEnum;
    /**
    * Specifies how and from which balance account(s) to deduct the chargeback amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.
    */
    'chargeback'?: SplitConfigurationLogic.ChargebackEnum;
    /**
    * Deducts the chargeback costs from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
    */
    'chargebackCostAllocation'?: SplitConfigurationLogic.ChargebackCostAllocationEnum;
    'commission': Commission;
    /**
    * Deducts the interchange fee from specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'interchange'?: SplitConfigurationLogic.InterchangeEnum;
    /**
    * Deducts all transaction fees incurred by the payment from the specified balance account. The transaction fees include the acquiring fees (interchange and scheme fee), and the fees due to Adyen (markup or commission). You can book any and all these fees to different balance account by specifying other transaction fee parameters in your split configuration profile:  - [`adyenCommission`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenCommission): The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended). - [`adyenMarkup`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenMarkup): The transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended). - [`schemeFee`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-schemeFee): The fee paid to the card scheme for using their network. - [`interchange`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-interchange): The fee paid to the issuer for each payment transaction made with the card network. - [`adyenFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenFees): The aggregated amount of Adyen\'s commission and markup. - [`acquiringFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-acquiringFees): The aggregated amount of the interchange and scheme fees.  If you don\'t include at least one transaction fee type in the `splitLogic` object, Adyen updates the payment request with the `paymentFee` parameter, booking all transaction fees to your platform\'s liable balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'paymentFee'?: SplitConfigurationLogic.PaymentFeeEnum;
    /**
    * Specifies how and from which balance account(s) to deduct the refund amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**
    */
    'refund'?: SplitConfigurationLogic.RefundEnum;
    /**
    * Deducts the refund costs from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
    */
    'refundCostAllocation'?: SplitConfigurationLogic.RefundCostAllocationEnum;
    /**
    * Books the amount left over after currency conversion to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'remainder'?: SplitConfigurationLogic.RemainderEnum;
    /**
    * Deducts the scheme fee from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'schemeFee'?: SplitConfigurationLogic.SchemeFeeEnum;
    /**
    * Unique identifier of the collection of split instructions that are applied when the rule conditions are met.
    */
    'splitLogicId'?: string;
    /**
    * Books the surcharge amount to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
    */
    'surcharge'?: SplitConfigurationLogic.SurchargeEnum;
    /**
    * Books the tips (gratuity) to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'tip'?: SplitConfigurationLogic.TipEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquiringFees",
            "baseName": "acquiringFees",
            "type": "SplitConfigurationLogic.AcquiringFeesEnum"
        },
        {
            "name": "additionalCommission",
            "baseName": "additionalCommission",
            "type": "AdditionalCommission"
        },
        {
            "name": "adyenCommission",
            "baseName": "adyenCommission",
            "type": "SplitConfigurationLogic.AdyenCommissionEnum"
        },
        {
            "name": "adyenFees",
            "baseName": "adyenFees",
            "type": "SplitConfigurationLogic.AdyenFeesEnum"
        },
        {
            "name": "adyenMarkup",
            "baseName": "adyenMarkup",
            "type": "SplitConfigurationLogic.AdyenMarkupEnum"
        },
        {
            "name": "chargeback",
            "baseName": "chargeback",
            "type": "SplitConfigurationLogic.ChargebackEnum"
        },
        {
            "name": "chargebackCostAllocation",
            "baseName": "chargebackCostAllocation",
            "type": "SplitConfigurationLogic.ChargebackCostAllocationEnum"
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "Commission"
        },
        {
            "name": "interchange",
            "baseName": "interchange",
            "type": "SplitConfigurationLogic.InterchangeEnum"
        },
        {
            "name": "paymentFee",
            "baseName": "paymentFee",
            "type": "SplitConfigurationLogic.PaymentFeeEnum"
        },
        {
            "name": "refund",
            "baseName": "refund",
            "type": "SplitConfigurationLogic.RefundEnum"
        },
        {
            "name": "refundCostAllocation",
            "baseName": "refundCostAllocation",
            "type": "SplitConfigurationLogic.RefundCostAllocationEnum"
        },
        {
            "name": "remainder",
            "baseName": "remainder",
            "type": "SplitConfigurationLogic.RemainderEnum"
        },
        {
            "name": "schemeFee",
            "baseName": "schemeFee",
            "type": "SplitConfigurationLogic.SchemeFeeEnum"
        },
        {
            "name": "splitLogicId",
            "baseName": "splitLogicId",
            "type": "string"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "SplitConfigurationLogic.SurchargeEnum"
        },
        {
            "name": "tip",
            "baseName": "tip",
            "type": "SplitConfigurationLogic.TipEnum"
        }    ];

    static getAttributeTypeMap() {
        return SplitConfigurationLogic.attributeTypeMap;
    }
}

export namespace SplitConfigurationLogic {
    export enum AcquiringFeesEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenCommissionEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenFeesEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenMarkupEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum ChargebackEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount',
        DeductAccordingToSplitRatio = 'deductAccordingToSplitRatio'
    }
    export enum ChargebackCostAllocationEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum InterchangeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum PaymentFeeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum RefundEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount',
        DeductAccordingToSplitRatio = 'deductAccordingToSplitRatio'
    }
    export enum RefundCostAllocationEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum RemainderEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum SchemeFeeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum SurchargeEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum TipEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
}
