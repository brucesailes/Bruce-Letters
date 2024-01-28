import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import styles from './LettersPage.module.css'; // Ensure this path is correct

const LetterPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [letter, setLetter] = useState({ content: '', title: '', date: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetch(`/api/letters/${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setLetter({ content: data.content, title: data.title, date: data.date });
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
    <div className="bg-white p-8 md:p-20 rounded shadow-md">
      <h1 className="text-center text-3xl font-bold mb-4">{letter.title}</h1>
      <p className="text-center mb-4">{letter.date}</p>
      <Markdown className={styles.prose} options={{ forceBlock: true }}>
        {letter.content}
      </Markdown>
    </div>
  );
};

export default LetterPage;







