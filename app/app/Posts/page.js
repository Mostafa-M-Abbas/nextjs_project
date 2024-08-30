
import Card from "../blog/card";
import clientPromise from '../lib/mongodb';

export default async function Posts() {
  const client = await clientPromise;
  const db = client.db();
  const posts = await db.collection("post").find({}).toArray();
  console.log(posts)
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

