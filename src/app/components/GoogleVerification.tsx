'use client';

import Head from 'next/head'

export default function GoogleVerification() {
  const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  return (
    <Head>
      <meta
        name="google-site-verification"
        content={GOOGLE_SITE_VERIFICATION}
      />
    </Head>
  )
}
