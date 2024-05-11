/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/', // 画像、cssなどを反映させる
  output: 'export',
  distDir: 'extensions/dist',
}

export default nextConfig;
