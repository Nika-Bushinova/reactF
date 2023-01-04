import React from 'react';
import { connect } from 'react-redux';
import { addFraseAC, addLikeActionCreater, addPostActionCreater, updTextActionCreater } from '../../../redux/profileReducer';
import store from '../../../redux/store';
import Posts from './posts';
/* const PostsContainer = (props) => {

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
} */

let mapStateToProps = (state) => {//запускается каждый раз, когда в state изменения. Формируется новый объект, который сравнивается со старым объектом внутренностями

   return {
      posts: state.profilePage.arrLikes,
      newText: state.profilePage.newText,
      store: store
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      upDateNewPostText: (text) => {

         let action = updTextActionCreater(text)
         dispatch(action)
      },

      addPost: () => {
         dispatch(addPostActionCreater())
      },

      addLike: (id, count) => {

         dispatch(addLikeActionCreater(id, count))
      }
   }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer