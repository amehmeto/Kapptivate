import React, { createContext } from 'react'
import { User } from '../core/models/User.tsx'

export type UserStore = {
  userStoreValues: {
    users: User[]
    currentPage: number
    totalUsers: number
    totalPage: number
    searchKeyword: string
  }
  setUserStore: React.Dispatch<React.SetStateAction<UserStore>>
}
export const UserContext = createContext<UserStore>({
  userStoreValues: {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    totalPage: 0,
    searchKeyword: '',
  },
  setUserStore: () => {},
})
