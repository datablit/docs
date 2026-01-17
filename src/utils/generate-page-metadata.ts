/**
 * Helper function to generate metadata for MDX pages
 * Use this in page.tsx files to avoid code duplication
 */

import { Metadata } from 'next';
import { generateMDXMetadata } from './mdx-metadata';

export function createPageMetadata(
    filePath: string,
    routePath: string
): Metadata {
    const mdxMeta = generateMDXMetadata(filePath, routePath);

    return {
        title: mdxMeta.title,
        description: mdxMeta.description,
        keywords: mdxMeta.keywords,
        alternates: {
            canonical: mdxMeta.canonical,
        },
        openGraph: {
            title: mdxMeta.title,
            description: mdxMeta.description,
            url: mdxMeta.canonical,
            siteName: 'Datablit Documentation',
            type: 'article',
            images: mdxMeta.ogImage
                ? [
                    {
                        url: mdxMeta.ogImage,
                        width: 1200,
                        height: 630,
                        alt: mdxMeta.title,
                    },
                ]
                : [
                    {
                        url: '/icon.svg',
                        width: 1200,
                        height: 630,
                        alt: mdxMeta.title,
                    },
                ],
        },
        twitter: {
            card: 'summary_large_image',
            title: mdxMeta.title,
            description: mdxMeta.description,
            images: mdxMeta.ogImage ? [mdxMeta.ogImage] : ['/icon.svg'],
            creator: '@Datablit_cdp',
        },
        robots: {
            index: !mdxMeta.noindex,
            follow: !mdxMeta.noindex,
        },
    };
}
