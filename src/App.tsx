import './design-system.css'
import { TopBar } from './TopBar.tsx'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <TopBar />
      <div className="app-content">
        <Header />
      </div>
    </>
  )
}

export default App
