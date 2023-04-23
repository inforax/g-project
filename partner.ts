// Partners
export class Partner {
 name: string
 email: string
 pass_salt: string
 pass_hash: string
 wallet: string
 contact: string
 balance: number
 image_id: number
 payout_system_id: number
 payout_creds: string
}

// Partner Transactions
export class PartnerTransactions {
 event: string
 sum: number
 partner_id: number
 type: string
 payment_system_id: number
 payout_creds: string
}