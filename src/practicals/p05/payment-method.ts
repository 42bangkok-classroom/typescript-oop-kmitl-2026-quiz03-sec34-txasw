export class PaymentMethod {
    protected accountName: string;

    constructor(accountName: string) {
        this.accountName = accountName
    }

    getAccountName(): string {
        return this.accountName
    }
}
