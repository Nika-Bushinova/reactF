import React from 'react'; 
import Post from './post'
import pC from'./Posts.module.css'
function Posts(){
return(<div className={pC.main__posts}>
   <h2>My posts</h2>
   <div className={pC.main__news}>
   <div className={pC.new__post}>New Post
   <textarea></textarea>
   </div>
   <Post likeCounts='7000'message='What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?'/>
   <Post likeCounts='9500' message="Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day."/>
   <Post likeCounts='15000' message="I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it"/>
   </div>
   <div>Send</div>
 </div>)
}
export default Posts