import Card from "./card";
import clientPromise from "../lib/mongodb";

export default async function Blog() {
  const client = await clientPromise;
  const db = client.db("Posts");
  const posts = await db.collection("post").find({}).toArray();

// const newJson = await fetch("http://localhost:3000/api/posts")
// const posts = await newJson.json()

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <Card
            key={post._id.toString()}
            id={post._id.toString()}
            title={post.title}
            body={post.body}
            
          />
        ))}
      </div>
    </div>
  );
}
