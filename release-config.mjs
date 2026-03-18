import { releaseRules } from './release-rules.mjs';

/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches: ['main'],
  plugins: [
    ['semantic-release-gitmoji', { releaseRules }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/github',
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md'],
      message: '🔖 ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};
