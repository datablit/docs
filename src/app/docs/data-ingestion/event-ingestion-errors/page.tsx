import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/data-ingestion/event-ingestion-errors/page.mdx',
    '/docs/data-ingestion/event-ingestion-errors'
  );
}

export default function Page() {
  return <Content />;
}
