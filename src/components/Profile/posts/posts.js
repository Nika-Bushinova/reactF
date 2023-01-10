import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formsControls';
import { maxLengthF, required } from '../../validators/validator';
import Post from './post'
import classes from'./Posts.module.css'
const Posts=(props)=>{
let postArr=props.posts.map((el)=>{return <Post likeCounts={el.likeCounts} message={el.message} id={el.id} addLike={props.addLike} dispatch={props.store.dispatch.bind(props.store)} profile={props.fullName}/> })
let onAddPost=(values)=>{
   props.addPost(values.post)
} 
return(<div className={classes.main__posts}>
   <h2>My posts</h2>
   <div className={classes.main__news}>
   <PostsReduxForm onSubmit={onAddPost}/>
{postArr}
   </div>
   
 </div>)
}

const PostsForm=(props)=>{
   return(<form onSubmit={props.handleSubmit}>
      <div className={classes.new__post}><p>New Post</p>
   <Field placeholder='your post' name='post' component={Textarea} validate={[required, maxLengthF(10)]}/>
   <button>Send</button>
   </div></form>
   )
}

const PostsReduxForm=reduxForm({form:'postsForm'})(PostsForm)

export default Posts