import {useState} from 'react';
import './App.css'
import { MenuButton } from './components/MenuButton/MenuButton'
import { Title } from './components/Title/Title'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen);
  }
  return (
    
    <div className='appHeader'>
      <Title title='Sign In'/>
      <MenuButton isOpen={isOpen} onClick={handleClick}/>
    </div>
    
  )
}

export default App
