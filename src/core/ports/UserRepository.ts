import { User } from '../models/User.ts'

export interface UserRepository {
  getAllUsers(): Promise<User[]>
}
