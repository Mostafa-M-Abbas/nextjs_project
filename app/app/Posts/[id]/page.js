// import { useRouter } from "next/router";
// const PostPage = ({ post, prevPostId, nextPostId }) => {
//   const router = useRouter();

//   const handleNavigation = (id) => {
//     if (id) {
//       router.push(`/post/${id}`);
//     }
//   };

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>

//       <div>
//         {prevPostId && (
//           <button onClick={() => handleNavigation(prevPostId)}>
//             Previous Post
//           </button>
//         )}
//         {nextPostId && (
//           <button onClick={() => handleNavigation(nextPostId)}>
//             Next Post
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostPage;
