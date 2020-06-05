import React from "react";
import { Typography } from "@material-ui/core";
import Post from "./Post";
export default function Main({ posts, section, setPosts, sections }) {
  return (
    <div style={{ padding: "8px" }}>
      <Typography style={{ textAlign: "center", paddingTop: "20px" }}>{section.toUpperCase()} Posts </Typography>
      {posts.length != 0 &&
        posts.map((post) => {
          return <Post post={post} posts={posts} setPosts={setPosts} sections={sections} />;
        })}
    </div>
  );
}
