const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/DropZone' : '',
  assetPrefix: isGithubPages ? '/DropZone/' : '',
};

module.exports = nextConfig;
