// Ads Promos
export class Ad {
 title: string
 description: string
 url: string
 image_id: number
 start_date: Date
 end_date: Date
}

// Offers
export class Offer {
 name: string
 cpa_act_count: number
 cpa_act_revenue: number
 share_percent: number
 baseline_threshold: number
 baseline_revenue: number
 url: string
 admin_id: number
}

// Campaigns
export class Campaign {
 name: string
 partner_id: number
 offer_id: number
 url: string
 tags: string
 admin_id: number
 postback_url: string
 api_key: string
}

// CPA Events
export class CpaEvent {
 user_id: number
}

// Hits
export class Hit {
 campaign_id: number
 footprint: string
}