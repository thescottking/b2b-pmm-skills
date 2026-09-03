# Security

## Reporting a vulnerability

Open a GitHub issue. This is a collection of markdown instruction files and a
small amount of glue code, so the realistic risk surface is credentials, not
code execution.

## Credentials

No skill in this repo requires an API key to do its core job. A few skills can
optionally pull data from an ads or analytics connector; where they do, they
read credentials from your environment and never from a file in the repo.

Three rules:

1. **Never commit a `.env` file.** The root `.gitignore` blocks `.env`,
   `.env.*` (except `.env.example`), and anything matching `*token*.json`,
   `client_secret*.json`, or `credentials*.json`. Do not weaken those patterns.
2. **Treat OAuth refresh tokens as long-lived secrets.** A refresh token for an
   analytics property grants ongoing read access until it is explicitly revoked.
   Deleting the file does not revoke the token, revoke it at the provider.
3. **Rotate anything that has left your machine.** If a key was ever pasted into
   a chat, staged into a cloud workspace, or copied into a backup file, rotate
   it. Assume exposure rather than auditing it.

## Your brand kit

`brand-kit/` is where your positioning, buyer definition, and competitive
material live. It is deliberately plain markdown so you can read every word
before anything acts on it.

If you fork this repo publicly, remember that your brand kit goes with it.
Unreleased pricing, internal transcripts, named customers, and unverified
competitor claims do not belong in a public file. Keep those in a private fork
or a local, gitignored `brand-kit/`.
