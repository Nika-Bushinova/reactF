import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Nav/Messages'
import News from './components/Nav/News';
import Music from './components/Nav/Music';
import Settings from './components/Nav/Settings';
function App() {
  return (
    <BrowserRouter>
  
    <div className="app-wrapper wrapper">
<Header/>
<Nav/>
<div className='wrapper__content'>
<Routes>
<Route path='/profile' element={<Profile />}/>
<Route path='/messages' element={<Messages />}/>
<Route path='/news' element={<News />}/>
<Route path='/music' element={<Music />}/>
<Route path='/settings' element={<Settings />}/>
</Routes>
</div>
    </div>

    </BrowserRouter>
    
  );
}


export default App;

