import { PaymentMethod } from "./payment-method";

export class EWallet extends PaymentMethod {
    private walletId: string

    constructor(accountName: string, walletId: string) {
        super(accountName)
        this.walletId = walletId
    }

    getPaymentFee(amount: number): number {
        return amount * 0.01
    }
}
