import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import News from './components/Nav/News';
import Music from './components/Nav/Music';
import Settings from './components/Nav/Settings';
import store from './redux/store';
import MessagesContainer from './components/Messages/message/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import Login from './components/Login/Login';
import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';

export function withRouter(Children) {
  return (props) => {
     const match = { params: useParams()};
  
     return <Children {...props} match={match} />
  }
}

class App extends React.Component{
  componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state

    this.props.initializeApp()
 }
  render(){
    if(!this.props.initialized){
      return<Preloader/>
    }


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
}
const mapStateToProps=(state)=>{
 return{initialized:state.app.initialized}
}

export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App)


