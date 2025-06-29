[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendConfigCredentials

# Type Alias: FileBackendConfigCredentials

> **FileBackendConfigCredentials** = `object`

Authentication credentials and configuration for the backend provider. Structure varies by backend type: - AWS S3: accessKeyId, secretAccessKey, region, etc. - Google Cloud: service account key JSON - Azure: connection string or account keys Store sensitive values as environment variable references.

## Example

```json
{
  "accessKeyId": "AKIA...",
  "secretAccessKey": "NPox...",
  "region": "us-east-1"
}
```
