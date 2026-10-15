import {useState} from 'react';
import './App.css'
import { SignIn } from './components/pages/SignIn';
import { Success } from './components/pages/Success';
import type { Page } from './types';



// const samplePost = {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
//     text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.',
//     date: '2021-04-20',
//     lesson_num: 1,
//     title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
//     author: 1,
// };

function App() {

  const [page, setPage] = useState<Page>('sign-in');
  return (
    <>
      {page === 'sign-in' && <SignIn onSuccess={() => setPage('success')} />}
      {page === 'success' && <Success onGoHome={() => setPage('sign-in')} />}
     
      {/* <div className='appHeader'>
        <Title title='Sign In'/>
        <MenuButton isOpen={isOpen} onClick={handleClick}/>
      </div>

      <div className='postCardsContainer'>
        <PostCard post={samplePost} variant="small" />
        <PostCard post={samplePost} variant="medium" />
        <PostCard post={samplePost} variant="large" />
      </div>  */}

      {/* <PostList></PostList> */}
      {/* <Btn type="submit">Sign In</Btn>
      <Btn type="submit">Get to home</Btn>
      <Input type='password' value="" label='password' placeholder='enter password' onChange={() => {}} /> 
      <Header />
      <Footer leftText='©2022 Blogfolio' rightText='All rights reserved' /> */}

      {/* <Layout></Layout> */}
      {/* <SignIn/> */}
      {/* <Success></Success> */}
      
   </> 
  )
}

export default App
