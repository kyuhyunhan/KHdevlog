import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';

export default function Home({ allPosts }) {
  const postsList = allPosts.map(({ id, title, date, content }) => {
    return (
      <li className={utilStyles.postListItem} key={id}>
        <div className={utilStyles.alignCenter}>
          <div className={utilStyles.heading2Xl}>{title}</div>
        </div>
        <div className={utilStyles.alignCenter}>
          <div className={utilStyles.headingMd}>{date}</div>
        </div>
        <div>
          {content}
        </div>
      </li>
    );
  });

  return (
    <Layout home>
      <ul>{postsList}</ul>

      {/* <section className={utilStyles.headingMd}>
        <p>프론트엔드 </p>
        <p>
          <a href="https://www.github.com/kyuhyunhan">GitHub</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
