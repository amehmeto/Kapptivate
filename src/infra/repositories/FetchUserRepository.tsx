import { UserRepository } from '../../core/ports/UserRepository.ts'
import { User } from '../../core/models/User.tsx'
import { faker } from '@faker-js/faker'

export class FetchUserRepository implements UserRepository {
  async getAllUsers(): Promise<User[]> {
    const response = await fetch(
      'https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users',
    )
    const parsedResponse = await response.json()
    return parsedResponse.map(this.improveMock())
  }

  async getUsersPage(
    page: number,
    limit: number,
  ): Promise<{ users: User[]; totalPage: number }> {
    const response = await fetch(
      `https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users`,
    )
    const parsedResponse = await response.json()
    const improvedUsers = parsedResponse.map(this.improveMock())
    const selectedPage = improvedUsers.slice((page - 1) * limit, page * limit)
    return {
      users: selectedPage,
      totalPage: Math.ceil(improvedUsers.length / limit),
    }
  }

  private improveMock() {
    return (user: User) => {
      const groups = ['QA Tester', 'Manager', 'Intern']
      return {
        id: faker.string.uuid(),
        name: user.name,
        email: faker.internet.email(),
        avatar: user.avatar,
        groups: [groups[Math.floor(Math.random() * groups.length)]],
        access: user.access,
        last_login: user.last_login,
      }
    }
  }
}
