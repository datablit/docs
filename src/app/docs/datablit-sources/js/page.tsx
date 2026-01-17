import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/datablit-sources/js/page.mdx',
    '/docs/datablit-sources/js'
  );
}

export default function Page() {
  return <Content />;
}
