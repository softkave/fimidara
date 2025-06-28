[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendConfigCredentials

# Type Alias: FileBackendConfigCredentials

> **FileBackendConfigCredentials** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:254](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L254)

Authentication credentials and configuration for the backend provider. Structure varies by backend type: - AWS S3: accessKeyId, secretAccessKey, region, etc. - Google Cloud: service account key JSON - Azure: connection string or account keys Store sensitive values as environment variable references.

## Example

```json
{
  "accessKeyId": "AKIA...",
  "secretAccessKey": "NPox...",
  "region": "us-east-1"
}
```
