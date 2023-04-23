// Admin
export namespace Admin {
 // Create, Update
 export class Input {
  name: string
  email: string
 }
 // Delete
 export class Delete {
  id: number
 }
 // Get (Read)
 export class Output {
  id: number
 }
}