# fimidara

[fimidara.com](https://fimidara.com)

**fimidara** is a simple, secure, and scalable file storage service designed for developers.

## Repositories

- [`fimidara-server-node`](https://github.com/softkave/fimidara/fimidara-server-node): Node.js backend
- [`fimidara-nextjs`](https://github.com/softkave/fimidara/fimidara-nextjs): Next.js client app
- [`fimidara-js-sdk`](https://github.com/softkave/fimidara/fimidara-js-sdk): Public JavaScript SDK
- [`fimidara-private-js-sdk`](https://github.com/softkave/fimidara/fimidara-private-js-sdk): Private JavaScript SDK
- [`fimidara-mfdoc-out`](https://github.com/softkave/fimidara/fimidara-mfdoc-out): Generated REST API endpoint docs (used in client app under `/docs`)

## Features

- **Versatile file storage**
  - Hierarchical structure
  - Resumable uploads
  - Storage backends: S3, Local (REST API only; GCS & Azure coming soon)
  - Pre-signed URLs
- **Media & file capabilities**
  - (Planned) Byte-range downloads, video/audio streaming, file versions, diffing, search, tagging, metadata
- **Access control**
  - Agent tokens
  - Permission groups
  - Resource-level permissions
- **Developer tools**
  - CLI for uploading/downloading files and folders
- **Media processing** (planned)
  - Image manipulation, video/audio transcoding, document conversion
- **Collaboration**
  - Share and collaborate with other users
- **Usage tracking**
- **Audit logs** (planned)

## Development

- Server setup: [SETUP.md](fimidara-server-node/notes/SETUP.md)
- Code guidelines: [CODE.md](fimidara-server-node/notes/CODE.md)
- Bugs: [BUG.md](fimidara-server-node/notes/BUG.md) (to be moved to ChoreBuddy)
- Todo: [TODO.md](fimidara-server-node/notes/TODO.md) (to be moved to ChoreBuddy)
- Roadmap: [ROADMAP.md](fimidara-server-node/notes/ROADMAP.md) (to be moved to ChoreBuddy)

## Documentation

- [App documentation](https://www.fimidara.com/docs/fimidara/introduction)
- [REST API reference](https://www.fimidara.com/docs/fimidara-rest-api/v1/overview)
- [JS SDK docs](fimidara-js-sdk/docs_markdown/README.md)

## SDK

- [`fimidara` JS SDK on npm](https://www.npmjs.com/package/fimidara)
