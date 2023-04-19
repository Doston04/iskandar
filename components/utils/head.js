import Head from "next/head";

export function CustomHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Soft Dental Clinic</title>
      <meta
        name="description"
        content="Biz xizmatlarning to'liq spektrini va har qanday muammolarni hal qilish uchun zamonaviy yondashuvni taklif qilamiz va bu barcha oila a'zolari uchun sog'lom tishlarni kafolatlaydi."
      />
      <link rel="canonical" href="https://softdental.uz/" />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://softdental.uz/"
      />
      <link rel="alternate" hrefLang="uz" href="https://softdental.uz/" />
      <link rel="alternate" hrefLang="ru" href="https://softdental.uz/ru" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
