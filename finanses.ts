// Finances

// Currency
export class Currency {
 name: string
 type: CurrencyType
}
// CurrencyTypes
export enum CurrencyType {
 curtype1 = 'curtype1',
 curtype2 = 'curtype2'
}
// Wallet
export class Wallet {
 user_id: number
 type: WalletType
 status: WalletStatus
}
// Wallet Types
export enum WalletType {
 wallettype1 = 'wallettype1',
 wallettype2 = 'wallettype2'
}
// Wallet Statuse
export enum WalletStatus {
 walletstatus1 = 'walletstatus1',
 walletstatus2 = 'walletstatus2'
}
// Invoices
export class Invoice {
 user_id: number
 payment_provider_id: number
 sum: number
 base_currency_id: number
 currency_id: number
 status: number
}
// Payment Provider
export class PaymentProvider {
 name: string
 image_id: number
}