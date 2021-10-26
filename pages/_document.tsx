import Document, {Html, Head, Main, NextScript} from "next/document"
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";


import {createEmotionCache}from "../modules/theme";
import {AppProps} from "next/app";
const APP_NAME = "Patryck's Portfolio";

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();

    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: AppProps) =>
              <App emotionCache={cache} {...props} />,
        });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }
  render() {
    return (
        <Html lang="en">
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <meta name="application-name" content={APP_NAME} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="apple-mobile-web-app-title" content={APP_NAME} />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#FFFFFF" />

            {/* add your own app-icon */}
            {/* <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icons/apple-touch-icon.png"
              />
              <link rel="shortcut icon" href="/app-icon.png" /> */}
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    )
  }
}