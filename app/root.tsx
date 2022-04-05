import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Layout } from '~/components/layout';
import styles from './styles/app.css';
import { BLOG_TITLE, BLOG_BASELINE } from '../lib/constants';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: BLOG_TITLE,
  description: BLOG_BASELINE,
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
