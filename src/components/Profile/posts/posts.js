import React from 'react'; 
import { addPostActionCreater, updTextActionCreater } from '../../../redux/state';
import Post from './post'
import classes from'./Posts.module.css'


function Posts(props){
   console.log('posts',props)
let postArr=props.posts.map((el)=>{return <Post likeCounts={el.likeCounts} message={el.message} id={el.id} addLike={props.addLike} updNewPostText={props.updNewPostText} /> })

let newPostElement=React.createRef()


let onPostChange=()=>{
   let text=newPostElement.current.value;
   let action=updTextActionCreater=(text)
   props.dispatch(action) 
}

let addPost=()=>{
props.dispatch(addPostActionCreater())
} 
return(<div className={classes.main__posts}>
   <h2>My posts</h2>
   <div className={classes.main__news}>
   <div className={classes.new__post}><p>New Post</p>
   <textarea ref={newPostElement} value={props.newText} onChange={onPostChange}/>
   <div onClick={addPost}>Send</div>
   </div>
{postArr}
   </div>
   
 </div>)
}
export default Posts