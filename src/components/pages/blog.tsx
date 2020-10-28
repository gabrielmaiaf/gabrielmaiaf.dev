import React from 'react';
import { PageProps } from 'gatsby';

import SEO from '../seo';
import LayoutWrapper from '../layout-wrapper';
import Time from '../time';
import { InternalLink } from '../link';

import { BlogStyles } from './page-styles';

interface NodeProp {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
  };
  fields: {
    slug: string;
    langKey: string;
  };
}
interface EdgeProp {
  node: NodeProp;
}
export interface BlogProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: EdgeProp[];
    };
  };
}

const Blog: React.FC<BlogProps> = props => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges.map(p => p.node);

  const postItem = (post: NodeProp) => (
    <li key={post.fields.slug}>
      <InternalLink to={post.fields.slug} from="blogpage">
        <header>
          {post.frontmatter.title}
          <Time className="time" date={post.frontmatter.date} />
        </header>
        <p>{post.excerpt}</p>
      </InternalLink>
    </li>
  );

  return (
    <>
      <SEO title="Blog" />
      <LayoutWrapper>
        <BlogStyles>
          <h1>Posts</h1>
          <ul>{posts.map(po => postItem(po))}</ul>
        </BlogStyles>
      </LayoutWrapper>
    </>
  );
};

export default Blog;
