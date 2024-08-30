// app/api/posts/[id]/route.js
import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("Posts");

  try {
    const post = await db.collection("post").findOne({ _id: new ObjectId(id) });
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
