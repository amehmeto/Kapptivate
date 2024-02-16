import { User } from '../models/User.tsx'

export interface UserRepository {
  getAllUsers(): Promise<User[]>
}
