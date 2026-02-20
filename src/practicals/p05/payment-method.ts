import { Payable } from "./payable";

export abstract class PaymentMethod implements Payable {
    protected accountName: string;

    constructor(accountName: string) {
        this.accountName = accountName
    }

    getAccountName(): string {
        return this.accountName
    }

    abstract getPaymentFee(amount: number): number

    abstract processPayment(amount: number): boolean

}
