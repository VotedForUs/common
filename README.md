# @votedforus/common

Shared CI and tooling config for VotedForUs repositories.

## semantic-release (gitmoji)

Provides shareable semantic-release configuration with gitmoji-based versioning.

- `@votedforus/common` — base config (changelog, GitHub release, git). For packages that do not publish to npm.
- `@votedforus/common/npm` — extends base with `@semantic-release/npm` and commits `package.json`. For packages that publish to npm.

### Usage

**For packages that publish to npm (e.g. votes):**

```javascript
// release.config.mjs
/** @type {import('semantic-release').GlobalConfig} */
export default { extends: '@votedforus/common/npm' };
```

**For packages that do not publish to npm (e.g. site):**

```javascript
// release.config.mjs
/** @type {import('semantic-release').GlobalConfig} */
export default { extends: '@votedforus/common' };
```

Add `@votedforus/common` as a devDependency. All semantic-release plugins are transitive dependencies.

## Commit message docs (AI agents)

The package includes generated documentation for AI agents and tools:

- `docs/gitmoji-rules.md` — Full emoji release rules (major/minor/patch). Use in any repo.
- `docs/how-to-write-a-commit.md` — How to write commits for repos using this package. Reference from `.cursor/rules/` or similar.

Regenerate from source: `npm run extract:rules`
