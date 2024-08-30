"use client"
import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const posts = await db.collection("post").find({}).toArray();

  return new Response(JSON.stringify(posts), { status: 200 });
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db();
  await db.collection("posts").insertOne(request.body);

  return new Response("success", { status: 201 });
}
