import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/datablit-sources/http-api/page.mdx',
    '/docs/datablit-sources/http-api'
  );
}

export default function Page() {
  return <Content />;
}
