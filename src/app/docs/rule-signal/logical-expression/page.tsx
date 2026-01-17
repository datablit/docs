import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/rule-signal/logical-expression/page.mdx',
    '/docs/rule-signal/logical-expression'
  );
}

export default function Page() {
  return <Content />;
}
