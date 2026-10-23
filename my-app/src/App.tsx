import {useState} from 'react';
import './App.css'
import { SignIn } from './components/pages/SignIn';
import { Success } from './components/pages/Success';
import type { Page } from './types';
import { AllPosts } from './components/pages/AllPosts';
import { posts } from './constants';
import { SignUp } from './components/pages/SignUp';
import { RegistrationConfirmation } from './components/pages/RegistrationConfirmation';
import { SelectedPost } from './components/pages/SelectedPost';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppThemeProvider } from './context/ThemeContext';
import { RouterProvider } from 'react-router';
import { SearchProvider } from './context/SearchContext';
// import {router} from './router/router'



// const samplePost = {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
//     text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.',
//     date: '2021-04-20',
//     lesson_num: 1,
//     title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
//     author: 1,
// };
const testPost = posts[0]; 
function App() {
  
  const [page, setPage] = useState<Page>('sign-in');
  
  return (
    <AppThemeProvider>
      <SearchProvider>
      <GlobalStyle />

      {/* <RouterProvider router={router} /> */}

      {page === 'sign-in' && <SignIn 
      onSignIn={() => setPage('success')}
      />}
      {page === 'success' && <Success 
      onGoHomeClick={() => setPage('sign-in')} 
      />}

      <SignUp />
      <RegistrationConfirmation />
      <SelectedPost post={testPost}/>
      <AllPosts />

      </SearchProvider>
   </AppThemeProvider> 
  )
}

export default App
