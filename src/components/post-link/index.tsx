import React from 'react';
import { InternalLink } from '../link';

interface PostProp {
  post: {
    frontmatter: {
      slug: string;
      title: string;
      date: string;
    };
  };
}

const PostLink: React.FC<PostProp> = ({ post }) => (
  <div>
    <InternalLink to={post.frontmatter.slug} from="blogpage">
      {post.frontmatter.title} ({post.frontmatter.date})
    </InternalLink>
  </div>
);

export default PostLink;
