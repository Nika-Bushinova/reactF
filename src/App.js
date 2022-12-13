import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/message/Messages'
import News from './components/Nav/News';
import Music from './components/Nav/Music';
import Settings from './components/Nav/Settings';
import store from './redux/store';
import MessagesContainer from './components/Messages/message/MessagesContainer';


function App(props) {
  console.log('app', props)
  return (
    <BrowserRouter>
      <div className="app-wrapper wrapper">
        <Header />
        <Nav point={props.appState.sideBar} />
        <div className='wrapper__content'>
          <Routes>
            <Route path='/profile' element={<Profile store={props.store } />} />
            <Route path='/messages/*' element={<MessagesContainer store={store} dispatch={props.dispatch.bind(store)} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;

