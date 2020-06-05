var Post = require("./../models/Post");

const getAll = (section) => {
  return new Promise((resolve, reject) => {
    Post.find(section ? { section } : {}, (err, docs) => {
      err ? reject({ message: "PROBLEM", err }) : resolve(docs);
    });
  });
};

const add = (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Post.find({ phoneNumber: data.phoneNumber }, (err, docs) => {
      console.log(docs);
      if (docs.length != 0) {
        reject({ message: "PHONE NUMBER ALREADY EXISTS", err });
      } else {
        Post.create(data, (err, docs) => {
          err ? reject({ message: "PROBLEM", err }) : resolve(docs);
        });
      }
    });
  });
};
const remove = (id) => {
  return new Promise((resolve, reject) => {
    Post.findByIdAndDelete(id, (err, docs) => {
      err ? reject({ message: "Removing Problem", err }) : resolve(docs);
    });
  });
};

const update = (id, data) => {
  return new Promise((resolve, reject) => {
    Post.findByIdAndUpdate(id, { ...data }, { new: true }, (err, docs) => {
      err ? reject({ message: "Updating problem", err }) : resolve(docs);
    });
  });
};

module.exports = { add, getAll, remove, update };
