// const express = require("express");
// const { MongoClient } = require("mongodb");

// const app = express();
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db("Posts");

//     // Example: Fetch all posts
//       app.get("/posts", async (req, res) => {
//         console.log(res)
//       const posts = await db.collection("post").find({}).toArray();
//         res.json(posts);
//     });

//     // Example: Fetch post by ID


// connectToDatabase();

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

// import React from "react";
// import { MongoClient } from "mongodb";
// const page = async () => {
//   return <div>page</div>;
// };
// export default page;
