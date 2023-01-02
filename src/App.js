import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/Nav/News';
import Music from './components/Nav/Music';
import Settings from './components/Nav/Settings';
import store from './redux/store';
import MessagesContainer from './components/Messages/message/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Login from './components/Login/Login';





function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper wrapper">
        <HeaderContainer/>
        <Nav point={store.getState().sideBar} />
        <div className='wrapper__content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/messages/*' element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;

