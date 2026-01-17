import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/datablit-sources/kotlin/page.mdx',
    '/docs/datablit-sources/kotlin'
  );
}

export default function Page() {
  return <Content />;
}
