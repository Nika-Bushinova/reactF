import React from 'react';
import { addPostActionCreater, updTextActionCreater } from '../../../redux/profileReducer';
import Posts from './posts';


const PostsContainer = (props) => {
   console.log('cont', props)

   let state=props.store.getState();
   let addPost = () => {
      props.store.dispatch(addPostActionCreater())
   }
   let onPostChange = (text) => {
      let action = updTextActionCreater(text)
      props.store.dispatch(action)
   }
   return (<Posts upDateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.arrLikes} newText={state.profilePage.newText} store={props.store}/>)
}
export default PostsContainer