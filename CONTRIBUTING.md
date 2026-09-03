# Contributing

## The one architectural rule

Skills own **method**. The brand kit owns **content**. If you find yourself
typing a company name, a product name, a competitor, a statistic, a hex value,
or a job title into a `SKILL.md`, it belongs in `brand-kit/` instead, and the
skill should read it from there.

This is not a style preference. It is the reason the toolkit works for anyone
other than the person who wrote it.

## Adding a skill

1. Create `skills/<name>/SKILL.md` with YAML frontmatter: `name` and
   `description`. The description is what decides whether Claude reaches for
   your skill, so write it as trigger phrases a real person would type.
2. Open with the brand-kit contract, copied verbatim from an existing skill.
   Every skill reads the kit the same way.
3. Cite brand-kit content by **heading name**, never by section number. Users
   reorder their own files.
4. Make cross-references to sibling skills optional. A skill may be installed
   on its own.
5. Test against `examples/ampfield/` before opening a PR.

## Changing a skill

Fix the method, not the example. If a change only makes sense for one company's
positioning, it is a brand-kit change on your end, not a repo change.

## Before you open a PR

- [ ] No company-specific nouns in any `SKILL.md`
- [ ] No absolute paths, no personal directories
- [ ] No credentials, no `.env` file, no token file
- [ ] Every brand-kit heading you cite actually exists in the template
- [ ] Every sibling skill you reference exists in `skills/`
- [ ] Ran the skill end-to-end against the Ampfield example
