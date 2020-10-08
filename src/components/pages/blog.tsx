import React, { ReactElement } from 'react';
import { Link, PageProps } from 'gatsby';

import SEO from '../seo';
import LayoutWrapper from '../layout-wrapper';
import Time from '../time';

// import { Query } from '../../@types/gatsby-types';

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

const Blog = (props: BlogProps): ReactElement => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges.map(p => p.node);

  const postItem = (post: NodeProp) => (
    <li key={post.fields.slug}>
      <Link to={post.fields.slug}>
        <header>
          {post.frontmatter.title}
          <Time className="time" date={post.frontmatter.date} />
        </header>
        <p>{post.excerpt}</p>
      </Link>
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
