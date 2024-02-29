import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LettersPage.module.css'; // Ensure this path is correct
import Markdown from 'markdown-to-jsx';
// let Markdown: any;
// import('markdown-to-jsx').then(module => {
//   Markdown = module.default || module;
// });

const LetterPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [letter, setLetter] = useState({ content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetch(`/api/Letters/${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setLetter({ content: data.content });
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching letter content:', error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 md:p-20 rounded shadow-md">
      <Markdown className={styles.prose} options={{ forceBlock: true }}>
        {letter.content}
      </Markdown>
    </div>
  );
};

export default LetterPage;







