
import './App.css'
import { MenuButton } from './components/MenuButton/MenuButton'
import { Title } from './components/Title/Title'

function App() {
  
  return (
    <>
    <div className='appHeader'>
      <Title title='Sign In'/>
      <MenuButton />
    </div>
    </>
  )
}

export default App
