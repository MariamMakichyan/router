import PostCards from "./Post-cards/Post-cards";

import "./Posts.css"

function Posts({posts}) {
  return (
    <div className="posts-container">
      <h1 className="page-title">📚 Blog Posts</h1>
      <div className="posts-grid">
        <PostCards posts={posts}/>
      </div>
    </div>
  );
}

export default Posts;