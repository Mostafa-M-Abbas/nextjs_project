export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/Posts/1");
  const post = await res.json();

  return {
    props: { post },
  };
}

const SSGExample = ({ post }) => {
  return (
    <div>
      <h1>SSR Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SSGExample;

/*
HTML is generated at build time.
Fast and ideal for static content that doesn’t change often.*/
