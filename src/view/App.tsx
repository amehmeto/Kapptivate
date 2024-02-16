import './design-system.css'
import { TopBar } from './TopBar.tsx'
import { Header } from './Header.tsx'
import { UserAccessTable } from './UserAccessTable.tsx'
import { useState } from 'react'
import { UserContext, UserStore } from './UserContext.tsx'

function App() {
  const [userStore, setUserStore] = useState<UserStore>({
    userStoreValues: {
      users: [],
      currentPage: 1,
      totalUsers: 0,
      totalPage: 0,
      searchKeyword: '',
    },
    setUserStore: () => {},
  })

  return (
    <UserContext.Provider value={{ ...userStore, setUserStore }}>
      <>
        <TopBar />
        <div className="app-content">
          <Header />
          <UserAccessTable />
        </div>
      </>
    </UserContext.Provider>
  )
}

export default App
