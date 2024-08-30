import { revalidatePath } from "next/cache";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/Posts/1");
  const post = await res.json();

  return {
    props: { post },
    revalidate: 5,
  };
}

const ISRExample = ({ post }) => {
  return (
    <div>
      <h1>ISR Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default ISRExample;

/*
Combines SSG and SSR.
Generates static content at build time and re-generates the content at runtime based on a revalidate interval.*/
