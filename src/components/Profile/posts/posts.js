import React from 'react'; 
import Post from './post'
import classes from'./Posts.module.css'

function Posts(props){
let postArr=props.posts.map((el)=>{return <Post likeCounts={el.likeCounts} message={el.message}/> })
return(<div className={classes.main__posts}>
   <h2>My posts</h2>
   <div className={classes.main__news}>
   <div className={classes.new__post}><p>New Post</p>
   <textarea></textarea>
   <div>Send</div>
   </div>
{postArr}
   </div>
   
 </div>)
}
export default Posts