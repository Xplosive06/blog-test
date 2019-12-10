import React from "react";

import "./AppBody.css";

function AppBody({ blogData }: any) {
  return blogData.map((data: any) => (
    <div className="blog-container" key={data.key}>
      <div className="blog-title">{data.title}</div>
      <div className="blog-content">{data.content}</div>
      <div className="author-and-created">
        <div className="blog-author">{data.author}</div>
        <div className="blog-created">{data.created_at}</div>
      </div>
    </div>
  ));
}

export default AppBody;