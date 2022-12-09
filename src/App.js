import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/message/Messages'
import News from './components/Nav/News';
import Music from './components/Nav/Music';
import Settings from './components/Nav/Settings';
import store from './redux/state';


function App(props) {
console.log('app', props)
  return (
    <BrowserRouter>
    <div className="app-wrapper wrapper">
<Header/>
<Nav point={props.appState.sideBar}/>
<div className='wrapper__content'>
<Routes>
<Route path='/profile' element={<Profile profilePage={props.appState.profilePage}dispatch={props.dispatch.bind(store)}  addLike={props.addLike.bind(store)} /*  updNewPostText={store.updNewPostText.bind(store)} *//>}/>
<Route path='/messages/*' element={<Messages messages={props.appState.dialogsPage} messagesData={props.appState.dialogsPage} addMessage={store.addMessage.bind(store)} updMessage={store.updMessage.bind(store)}/* messageArr={props.messageArr} dialogElements={props.dialogElements} *//>}/>
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

