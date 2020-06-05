import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PostForm from "./components/PostForm";
import axios from "axios";
import "./App.css";
const sections = [
  { title: "Reciever", value: "reciever" },
  { title: "Giver", value: "giver" },
];

function App() {
  const [section, setSection] = useState("reciever");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${section}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [section]);

  return (
    <div style={{ margin: "0 18%" }}>
      <Header title="You'll Never walk alone" sections={sections} setSection={setSection}></Header>
      <PostForm setPosts={setPosts} posts={posts} sections={sections} section={section}></PostForm>
      <Main posts={posts} section={section} setPosts={setPosts} sections={sections}></Main>
      <Footer />
    </div>
  );
}

export default App;
