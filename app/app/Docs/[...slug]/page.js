export default function DocsPage({ params }) {
  console.log('Params:', params);
  const { slug } = params;

  return (
    <div>
<h1>Segments</h1>
      <ul>
        {slug.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </div>
  );
}
