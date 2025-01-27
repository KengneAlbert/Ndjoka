import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren<{
  titleKey: string;
  descriptionKey: string;
  image?: string;
}>;

export const Layout = ({ children, titleKey, descriptionKey, image }: LayoutProps) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t(titleKey)}</title>
        <meta name="description" content={t(descriptionKey)} />
        <meta property="og:title" content={t(titleKey)} />
        <meta property="og:description" content={t(descriptionKey)} />
        <meta property="og:locale" content={i18n.language} />
        {image && <meta property="og:image" content={image} />}
        <link rel="canonical" href={window.location.href} />
        {i18n.languages.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`${window.location.origin}/${lang}${window.location.pathname}`}
          />
        ))}
      </Helmet>
      {children}
    </>
  );
};
