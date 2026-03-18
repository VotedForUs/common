/**
 * Single source of truth for semantic-release-gitmoji release rules.
 * Used by release-config.mjs, release-config-npm.mjs, and scripts/extract-release-rules.mjs.
 */
import { gitmojis } from 'gitmojis';

export const MAJOR_EMOJIS = [':boom:'];
export const MINOR_EMOJIS = [':sparkles:', ':new:'];
export const EXTRA_PATCH_EMOJIS = [':ballot_box:'];

const reservedEmojis = new Set([...MAJOR_EMOJIS, ...MINOR_EMOJIS]);
export const patchEmojis = [
  ...gitmojis.map((g) => g.code).filter((code) => !reservedEmojis.has(code)),
  ...EXTRA_PATCH_EMOJIS,
];

/** Release rules for semantic-release-gitmoji */
export const releaseRules = {
  major: MAJOR_EMOJIS,
  minor: MINOR_EMOJIS,
  patch: patchEmojis,
};
