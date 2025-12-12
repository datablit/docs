import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Enable standalone output for Docker builds
  output: 'standalone' as const,
  // Optionally, add any other Next.js config below
  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: [
          {
            key: "Cache-Control",
            // enable this once stable
            // value: "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
            value: "public, max-age=60, s-maxage=300, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
