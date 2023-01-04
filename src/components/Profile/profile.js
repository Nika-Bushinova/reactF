import React from 'react';
import pC from './Profile.module.css'
import ProfileInfo from './Profile__info';
import PostsContainer from './posts/postsContainer';


function Profile(props) {

   return (
  
      <main className={pC.wrapper__content}>
         <div className={pC.main__bg}> </div>
         <ProfileInfo {...props} />
         <PostsContainer />
      </main>
   )
}

export default Profile