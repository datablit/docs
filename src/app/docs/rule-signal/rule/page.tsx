import { Metadata } from 'next';
import { createPageMetadata } from '@/utils/generate-page-metadata';
import Content from './page.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata(
    'docs/rule-signal/rule/page.mdx',
    '/docs/rule-signal/rule'
  );
}

export default function Page() {
  return <Content />;
}
