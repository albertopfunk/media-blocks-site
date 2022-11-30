import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Media Blocks</title>
        <meta
          name="description"
          content="Shopify app that simplifies and manages rich media embeds"
        />
        <link rel="icon" href="/media-blocks.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://apps.shopify.com/partners/builtbyte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Media Blocks
          </a>
        </h1>

        <p className={styles.description}>
          Simplify adding and managing rich media embeds from over 1500
          publishers!
        </p>

        <div className={styles.grid}>
          <a
            href="https://apps.shopify.com/partners/builtbyte"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Install on Shopify &rarr;</h2>
            <p>
              Visit our Shopify listing and try it out with our 14-day free
              trial!
            </p>
          </a>

          <a
            href="https://apps.shopify.com/partners/builtbyte"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>View Demo Site &rarr;</h2>
            <p>Try out our Shopify demo shop to check out the media embeds!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <Link href="/private-policy">Private Policy</Link>
        </div>

        <div className={styles.footerLogoContainer}>
          <Link href="/">
            <a className={styles.footerLogo}>
              <span className={styles.logoTxt}>Media</span>
              <span className={styles.logoImg}>
                <Image
                  src="/media-blocks.svg"
                  alt="media blocks Logo"
                  width={35}
                  height={35}
                />
              </span>
              <span className={styles.logoTxt}>Blocks</span>
            </a>
          </Link>
        </div>

        <div className={styles.footerNav}>
          <a
            href="mailto:contact@mediablocks.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@mediablocks.app
          </a>
        </div>
      </footer>
    </div>
  );
}
