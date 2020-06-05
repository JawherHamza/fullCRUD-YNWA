import React, { Fragment } from "react";
import { CardContent, Typography, Card, Button, Modal } from "@material-ui/core";
import axios from "axios";
import PostForm from "./PostForm";

export default function Post({ post, posts, setPosts, sections }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let deletePost = (id) => {
    axios
      .delete(`http://localhost:8080/post/${id}`)
      .then((res) => {
        let newPosts = posts.filter((el) => el._id != res.data._id);
        //refresh front end posts
        setPosts(newPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let updatePost = (id) => {
    axios
      .delete(`http://localhost:8080/post/${id}`)
      .then((res) => {
        let newPosts = posts.filter((el) => el._id != res.data._id);
        //refresh front end posts
        setPosts(newPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <Card style={{ padding: "8px", margin: "5px" }}>
        <div>
          <button className="delete-btn" onClick={() => deletePost(post._id)}>
            &times;
          </button>
        </div>
        <CardContent>
          <Typography>Description : {post && post.desc}</Typography>
          <Typography>Phone Number : {post && post.phoneNumber}</Typography>
          <Typography>Location : {post && post.location}</Typography>
          <Typography>Section : {post && post.section}</Typography>
        </CardContent>
        <div>
          <Button onClick={handleOpen} style={{ float: "right", backgroundColor: "orange" }}>
            UPDATE
          </Button>
          <Modal open={open} onClose={handleClose}>
            <div style={{ backgroundColor: "white" }}>
              <PostForm post={post} posts={posts} setPosts={setPosts} sections={sections} isUpdate={true}></PostForm>
            </div>
          </Modal>
        </div>
      </Card>
    </Fragment>
  );
}
