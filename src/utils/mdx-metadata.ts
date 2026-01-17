import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface MDXFrontmatter {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
    noindex?: boolean;
}

/**
 * Get frontmatter and content from an MDX file
 * @param filePath - Path relative to src/app (e.g., 'docs/getting-started/page.mdx')
 */
export function getMDXMetadata(filePath: string): {
    frontmatter: MDXFrontmatter;
    content: string;
} {
    try {
        const fullPath = join(process.cwd(), 'src/app', filePath);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            frontmatter: (data || {}) as MDXFrontmatter,
            content,
        };
    } catch (error) {
        // Return empty frontmatter if file doesn't exist or can't be read
        console.warn(`Could not read MDX file: ${filePath}`, error);
        return {
            frontmatter: {},
            content: '',
        };
    }
}

/**
 * Generate metadata from MDX frontmatter
 * @param filePath - Path relative to src/app
 * @param routePath - URL path (e.g., '/docs/getting-started')
 */
export function generateMDXMetadata(
    filePath: string,
    routePath: string
): {
    title: string;
    description: string;
    keywords?: string[];
    canonical: string;
    ogImage?: string;
    noindex?: boolean;
} {
    const { frontmatter } = getMDXMetadata(filePath);
    const baseUrl = 'https://docs.datablit.com';

    // Extract title from H1 if no frontmatter title
    let title = frontmatter.title;
    if (!title) {
        // Try to extract from content
        const { content } = getMDXMetadata(filePath);
        const h1Match = content.match(/^#\s+(.+)$/m);
        if (h1Match) {
            title = h1Match[1].trim();
        }
    }

    // Generate description from first paragraph if missing
    let description = frontmatter.description;
    if (!description) {
        const { content } = getMDXMetadata(filePath);
        // Extract first paragraph (non-heading, non-code)
        const firstPara = content
            .split('\n\n')
            .find(p => p.trim() && !p.trim().startsWith('#') && !p.trim().startsWith('```'));
        if (firstPara) {
            description = firstPara
                .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links
                .replace(/\*\*/g, '') // Remove bold
                .replace(/\*/g, '') // Remove italic
                .trim()
                .substring(0, 160); // Limit to 160 chars
        }
    }

    return {
        title: title || 'Datablit Documentation',
        description: description || 'Complete developer documentation for Datablit.',
        keywords: frontmatter.keywords,
        canonical: `${baseUrl}${routePath}`,
        ogImage: frontmatter.ogImage,
        noindex: frontmatter.noindex || false,
    };
}
