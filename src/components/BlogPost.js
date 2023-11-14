import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A unijversal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singufdfdflar. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
