import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Chatbot` : 'Chatbot';
  }, [title]);

  return null;
});

export default PageTitle;
