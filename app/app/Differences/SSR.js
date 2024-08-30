export async function getServerSideProps(data) {
  const res = await fetch("https://jsonplaceholder.typicode.com/Posts/1");
  const post = await res.json();

  return {
    props: { post },
  };
}

const SSRExample = ({ post }) => {
  return (
    <div>
      <h1>SSR Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SSRExample;

/*
HTML is generated on each request.
Great for dynamic content that needs to be fresh on every request but can be slower.
*/
