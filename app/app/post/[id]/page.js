import { ObjectId } from "mongodb";
import Card from "../Card";
import clientPromise from "../../lib/fetchPostById";
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  try {
    const { id } = params;
    const client = await clientPromise;
    const db = client.db("Posts");
    
    const post = await db.collection("post").findOne({ _id: new ObjectId(id) });

    console.log("Fetched Post:", post);
    if (!post) {
      notFound();
    } else {
      return (
        <div className="container">
          <Card
            key={post._id.toString()}
            id={post._id.toString()}
            title={post.title}
            body={post.body}
          />
        </div>
      );
    }
  } catch (error) {
    console.error("Error fetching the post:", error);
    return <div>Error loading post</div>;
  }
}