import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/datablit-sources/facebook-lead-ads/page.mdx',
    '/docs/datablit-sources/facebook-lead-ads'
  );
}

export default function Page() {
  return <Content />;
}
