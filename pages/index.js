import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
);

export default function Index() {
  return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
        <img src="https://avatars0.githubusercontent.com/u/22168226?s=400&v=4"/>
      </Layout>
  );
}
