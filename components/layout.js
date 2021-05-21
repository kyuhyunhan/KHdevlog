import Head from 'next/head';
import Link from 'next/link';

import { GoogleFonts } from "next-google-fonts";

import utilStyles from '../styles/utils.module.css';
import headerStyles from '../styles/layout/header.module.css';
import mainStyles from '../styles/layout/main.module.css';

const name = 'kh_Blog';
export const siteTitle = 'kh_Devlog';

export default function Layout({ children, home }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;600&display=swap"/>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
        <header className={headerStyles.header}>
          <div className={headerStyles.logo}>
            <p>kyuhyun</p>
            <p>han - </p>
          </div>
          <nav className={headerStyles.nav}>
            <div className={headerStyles.navItem}>
              ABOUT
            </div>
            <div className={headerStyles.navItem}>
              JavaScript
            </div>
            <div className={headerStyles.navItem}>
              React
            </div>
            <div className={headerStyles.navItem}>
              Front End
            </div>
            <div className={headerStyles.navItem}>
              Log
            </div>
          </nav>
        </header>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header> */}
      <main>{children}</main>
      {!home && (
        <div className={mainStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}
