import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/getting-started/page.mdx',
    '/docs/getting-started'
  );
}

export default function Page() {
  return <Content />;
}
