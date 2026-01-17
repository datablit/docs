import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/data-ingestion/page.mdx',
    '/docs/data-ingestion'
  );
}

export default function Page() {
  return <Content />;
}
