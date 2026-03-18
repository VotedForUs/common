# How to Write a Commit (AI Agents)

Repositories using `@votedforus/common` for semantic-release use [Gitmoji](https://gitmoji.dev) for commit messages. Follow these rules when writing commits.

## Format

```
<emoji> Short description

Optional body

Optional footer (e.g. issue refs: #123)
```

- Use the raw emoji character **or** the `:code:` shorthand — both are valid.
- Keep the subject line under ~50 characters when practical.
- Use imperative mood: "Add feature" not "Added feature".

## Emoji Reference

<!-- EMOJI_SECTION_START -->
### Major

| Emoji | Code | Release type | When to use |
|-------|------|--------------|-------|
| 💥 | `:boom:` | **major** | Introduce breaking changes. |

### Minor

| Emoji | Code | Release type | When to use |
|-------|------|--------------|-------|
| ✨ | `:sparkles:` | **minor** | Introduce new features. |
| 🆕 | `:new:` | **minor** | New feature or capability |

### Patch

| Emoji | Code | Release type | When to use |
|-------|------|--------------|-------|
| 🐛 | `:bug:` | **patch** | Fix a bug. |
| 🚑️ | `:ambulance:` | **patch** | Critical hotfix. |
| 🔒️ | `:lock:` | **patch** | Fix security or privacy issues. |
| 🔧 | `:wrench:` | **patch** | Add or update configuration files. |
| ♻️ | `:recycle:` | **patch** | Refactor code. |
| ⬆️ | `:arrow_up:` | **patch** | Upgrade dependencies. |
| 📝 | `:memo:` | **patch** | Add or update documentation. |
| 🧪 | `:test_tube:` | **patch** | Add a failing test. |
| 🚧 | `:construction:` | **patch** | Work in progress. |
| 🎨 | `:art:` | **patch** | Improve structure / format of the code. |
| 🔥 | `:fire:` | **patch** | Remove code or files. |
| 👷 | `:construction_worker:` | **patch** | Add or update CI build system. |
| 📦️ | `:package:` | **patch** | Add or update compiled files or packages. |

*Other gitmojis also trigger patch — this table shows common ones.*

### Reserved (do not use manually)

| Emoji | Code | Notes |
|-------|------|-------|
| 🔖 | `:bookmark:` | Created by semantic-release for version tags |
<!-- EMOJI_SECTION_END -->

## Examples

```
✨ Add legislator vote history endpoint

🐛 Fix null handling when bill actions are missing

💥 Remove deprecated getLegislators() export

⬆️ Bump typescript to 5.9.3

📝 Update README with setup instructions

🧪 Add coverage for congress-api error paths
```

## Reserved

Do not use `:bookmark:` manually — it is created by semantic-release for version tags.
