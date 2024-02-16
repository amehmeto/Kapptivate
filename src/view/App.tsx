import './design-system.css'
import { TopBar } from './TopBar.tsx'
import { Header } from './Header.tsx'
import { UserAccessTable } from './UserAccessTable.tsx'

function App() {
  return (
    <>
      <TopBar />
      <div className="app-content">
        <Header />
        <UserAccessTable />
      </div>
    </>
  )
}

export default App
