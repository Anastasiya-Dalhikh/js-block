import {useState} from 'react';
import './App.css'
import { MenuButton } from './components/MenuButton/MenuButton'
import { Title } from './components/Title/Title'
import { PostCard } from './components/PostCard/PostCard';

const samplePost = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.',
    date: '2021-04-20',
    lesson_num: 1,
    title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 1,
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className='appHeader'>
        <Title title='Sign In'/>
        <MenuButton isOpen={isOpen} onClick={handleClick}/>
      </div>

      <div className='postCardsContainer'>
        <PostCard post={samplePost} variant="small" />
        <PostCard post={samplePost} variant="medium" />
        <PostCard post={samplePost} variant="large" />
      </div> 
   </> 
  )
}

export default App
