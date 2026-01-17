import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/getting-started/key-concepts/page.mdx',
    '/docs/getting-started/key-concepts'
  );
}

export default function Page() {
  return <Content />;
}
