import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
);

export default function Index() {
  return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs"/>
          <PostLink id="learn-nextjs"/>
          <PostLink id="deploy-nextjs"/>
        </ul>
        <img src="https://avatars0.githubusercontent.com/u/22168226?s=400&v=4"/>
      </Layout>
  );
}
