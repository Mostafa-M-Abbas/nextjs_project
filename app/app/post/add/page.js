import clientPromise from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
  cloud_name: "dz17b2tsx",
  api_key: "743363894962418",
  api_secret: "WrF3kMiwnogtpOlnayZaWBXV-Hc",
});

export default function AddPost() {
  async function create(formData) {
    "use server";

    const file = formData.get("image");
    if (!file) {
      throw new Error("No file uploaded");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    
    const imgRes = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const title = formData.get("title");
    const description = formData.get("description");

    if (!title || !description) {
      throw new Error("Title and description are required");
    }

    const client = await clientPromise;
    const db = client.db("Posts"); // Specify the database name
    await db.collection("post").insertOne({ title, description, imgUrl: imgRes.url });
    
    revalidatePath("/Posts");
    redirect("/Posts");
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add New Post</h1>
      <form action={create}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Choose Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">Add Post</button>
      </form>
    </div>
  );
}
