import './App.css';



function App() {
  return (
    <div className="app-wrapper wrapper">
<header className='wrapper__header'>
 <h2> Social network</h2>
</header>
<nav className='wrapper__nav'>
<div><a href='#'>Profile</a></div>
<div><a href='#'>Messages</a></div>
<div><a href='#'>News</a></div>
<div><a href='#'>Music</a></div>
<div><a href='#'>Settings</a></div>
</nav>
<main className='wrapper__content main'>
<div className='main__bg'> </div>
<div className="main__info info">
  <div className='info__img'></div>
  <div className='info__text'>
    <h1>Name Surname</h1>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
  </div>
</div>
<div className='main__posts'>
  <h2>My posts</h2>
  <div className="main__news">
    <div>Post 1</div>
    <div> Post 2</div>
  </div>
  <div className="main__button">Send</div>
</div>
</main>
    </div>
    
  );
}


export default App;

