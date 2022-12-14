import React from 'react';
import { addPostActionCreater, updTextActionCreater } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import Posts from './posts';


const PostsContainer = (props) => {

   return (
      <StoreContext.Consumer>
         {(store) => {
               console.log('cont', store)
            let state = store.getState();
            let addPost = () => {
               store.dispatch(addPostActionCreater())
            }
            let onPostChange = (text) => {
               let action = updTextActionCreater(text)
               store.dispatch(action)
            }
            return <Posts upDateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profilePage.arrLikes}
               newText={state.profilePage.newText}
               store={store} />
         }}

      </StoreContext.Consumer>
   )
}
export default PostsContainer