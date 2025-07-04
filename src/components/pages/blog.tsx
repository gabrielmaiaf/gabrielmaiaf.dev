import React from 'react';
import { PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import LayoutWrapper from '../layout-wrapper';
import Time from '../time';
import { InternalLink } from '../link';

import { BlogStyles } from './page-styles';

interface NodeProp {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    alt: string;
    description: string;
    featuredImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  fields: {
    slug: string;
    langKey: string;
  };
}
export interface EdgeProp {
  node: NodeProp;
}
export interface BlogProps {
  allMarkdownRemark: {
    edges: EdgeProp[];
  };
}

const Blog: React.FC<PageProps<BlogProps>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(p => p.node);

  const postItem = (post: NodeProp) => (
    <li key={post.fields.slug}>
      <InternalLink to={post.fields.slug} from="blogpage">
        <GatsbyImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.alt}
          className="post-image"
        />
        <header>
          {post.frontmatter.title}
          <Time className="time" date={post.frontmatter.date} />
        </header>
        <p>{post.frontmatter.description}</p>
      </InternalLink>
    </li>
  );

  return (
    <>
      <LayoutWrapper>
        <BlogStyles>
          <h1>Posts</h1>
          <ul>{posts.map(post => postItem(post))}</ul>
        </BlogStyles>
      </LayoutWrapper>
    </>
  );
};

export default Blog;
