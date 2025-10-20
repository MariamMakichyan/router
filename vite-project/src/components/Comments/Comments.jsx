import CommentsCards from "./Comment-card/Comments-card";

import "./Comments.css"

function Comments({comments}) {

  return (
    <div className="comments-container">
      <h1 className="page-title">💬 Comments</h1>
      <div className="comments-grid">
        <CommentsCards comments={comments}/>
      </div>
    </div>
  );
}

export default Comments;