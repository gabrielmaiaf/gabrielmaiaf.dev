import React from 'react';
import { InternalLink } from '../link';

const PostLink: React.FC = ({ post }: any) => (
  <div>
    <InternalLink to={post.frontmatter.slug} from="blogpage">
      {post.frontmatter.title} ({post.frontmatter.date})
    </InternalLink>
  </div>
);

export default PostLink;
