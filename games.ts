// Games

// Game
export class Game {
 title: string
 description: string
 provider_pointer: string
 image_id: number
 provider_id: number
 category_id: number
}

// Game Provider
export class GameProvider {
 name: string
 description: string
 image_id: number
 active: number
}

// Game Category
export class GameCategory {
 title: string
 description: string
 image_id: number
 start_date: Date
 end_date: Date
}

// Game Transaction
export class GameTransaction {
  session_id: number
  request_id: number
  cost_fun: number
  cost_real: number
  event: Event
}

export enum Event {
 event1 = 'event1',
 event2 = 'event1'
}

// GameSession
export class GameSession {
 user_id: number
 game_id:  number
 enter_guid: number
 session_guid:  number
 ext_id:  number
 status: GameSessionStatus
 game_budget: number
 bet_sum: number
 win_sum: number
}

export enum GameSessionStatus {
 status1 = 'status1',
 status2 = 'status1'
}
