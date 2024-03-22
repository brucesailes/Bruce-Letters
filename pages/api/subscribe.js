// pages/api/subscribe.js
import db from '../../firebase/initFirebase';
import { collection, addDoc } from 'firebase/firestore';

// Helper function to validate emails
const validateEmail = (email) => {
  return /@.*(gmail\.com|ymail\.com)$/.test(email);
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      // Perform the email validation
      if (!validateEmail(email)) {
        // Respond with a 400 error if the email is invalid
        return res.status(400).json({ error: 'Invalid email address.' });
      }

      await addDoc(collection(db, 'emails'), {
        email,
        subscribedAt: new Date(),
      });

      res.status(200).json({ message: 'Email added successfully' });
    } catch (error) {
      console.error('Error adding email to Firestore:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}

