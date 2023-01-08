import React from 'react';
import { connect } from 'react-redux';
import { addFraseAC, addLikeActionCreater, addPostActionCreater, updTextActionCreater } from '../../../redux/profileReducer';
import store from '../../../redux/store';
import Posts from './posts';
let mapStateToProps = (state) => {//запускается каждый раз, когда в state изменения. Формируется новый объект, который сравнивается со старым объектом внутренностями

   return {
      posts: state.profilePage.arrLikes,
      newText: state.profilePage.newText,
      store: store,
      
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      upDateNewPostText: (text) => {

         let action = updTextActionCreater(text)
         dispatch(action)
      },

      addPost: (post) => {
         dispatch(addPostActionCreater(post))
      },

      addLike: (id, count) => {

         dispatch(addLikeActionCreater(id, count))
      }
   }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer