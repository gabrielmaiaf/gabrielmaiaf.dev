interface DataBlogPostProps {
  image: string;
  url: string;
  title: string;
  description: string;
  language: 'en' | 'pt';
  datePublished: string;
}

export const structuredDataBlogPost = (props: DataBlogPostProps): string => {
  const language = props.language === 'en' ? 'en-GB' : 'pt-BR';

  const dateModified = new Date(props.datePublished);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    image: props.image,
    url: props.url,
    headline: props.title,
    description: props.description,
    inLanguage: language,
    isFamilyFriendly: 'true',
    datePublished: dateModified,
    author: {
      '@type': 'Person',
      name: 'Gabriel Maia',
      url: 'https://gabrielmaia.dev',
    },
  };

  return JSON.stringify(data);
};
