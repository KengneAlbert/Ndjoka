import { Helmet } from 'react-helmet-async';
import { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | NDJOKA`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};
