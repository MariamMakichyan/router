import "./App.css";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";
import PhotoGallery from "./components/Photos/PhotoGallery"
import Users from "./components/Users/Users";
import Header from "./header";

import {Routes,Route} from 'react-router-dom'

function App({posts, comments, photos, users}) {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Posts posts={posts}/> }/>
      <Route path="/comments" element={<Comments comments={comments}/>}/>
      <Route path="/photos" element={<PhotoGallery photos={photos}/>}/>
      <Route path="/users" element={<Users users={users}/>}/>
      </Routes>
      
      

      
    </>
  );
}

export default App;
