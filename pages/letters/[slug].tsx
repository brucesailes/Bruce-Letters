import React from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';



const LetterPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [letterContent, setLetterContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (slug) {
      // Fetch the letter content based on the slug
      fetch(`/api/letters/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setLetterContent(data.content);
        })
        .catch((error) => {
          console.error('Error fetching letter content:', error);
        });
    }
  }, [slug]);

  return (
    <div className="bg-white p-8 md:p-20 rounded shadow-md">
      {letterContent ? (
        <div>
          <h1 className="text-center text-3xl font-bold mb-4">{slug}</h1>
          {/* Render the Markdown content using react-markdown */}
          <ReactMarkdown className="prose max-w-none">{letterContent}</ReactMarkdown>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LetterPage;


