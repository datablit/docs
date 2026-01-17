import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/datablit-sources/swift/page.mdx',
    '/docs/datablit-sources/swift'
  );
}

export default function Page() {
  return <Content />;
}
