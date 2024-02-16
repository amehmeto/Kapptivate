import { User } from '../models/User.ts'

export function filterUsersBy(searchKeyword: string) {
  return ({ users, totalPage }: { users: User[]; totalPage: number }) => ({
    users: users.filter((user) => user.name.startsWith(searchKeyword)),
    totalPage,
  })
}
