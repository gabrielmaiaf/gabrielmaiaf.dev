import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

import SEO from '../seo';
import LayoutWrapper from '../layout-wrapper';
import Time from '../time';

import { BlogStyles } from './page-styles';

const Blog = (props: any): ReactElement => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges.map((p: any) => p.node);

  const postItem = (post: any) => (
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
          <ul>{posts.map((po: any) => postItem(po))}</ul>
        </BlogStyles>
      </LayoutWrapper>
    </>
  );
};

export default Blog;
