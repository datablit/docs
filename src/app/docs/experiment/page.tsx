import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/experiment/page.mdx',
    '/docs/experiment'
  );
}

export default function Page() {
  return <Content />;
}
