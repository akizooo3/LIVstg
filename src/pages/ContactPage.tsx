import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://forms.gle/Qdjgy9VvgF54sGpG9';
  }, []);

  return (
    <div>
      <h1>お問い合わせ</h1>
      <p>お問い合わせフォームにリダイレクトしています...</p>
    </div>
  );
};

export default ContactPage;
