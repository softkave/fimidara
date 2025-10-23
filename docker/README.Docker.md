### Building and running fimidara

### References

- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
- [Pushing to a registry](https://docs.docker.com/get-started/workshop/04_sharing_app/)
- [Dockerfile reference](https://docs.docker.com/reference/dockerfile)
- [Docker compose reference](https://docs.docker.com/reference/compose-file)

### Build commands

- `fimidara-server-node`
  - Build `local` & `dev` (run from root dir `.`):
  ```bash
  docker build -t fimidara-server-node-local-dev -f docker/Dockerfile.fimidara-server-node-local-dev .
  ```
  - Build `production` & `amd64` (run from root dir `.`):
  ```bash
  docker build --platform=linux/amd64 -t infra-registry.fimidara.com/fimidara-server-node-amd64 -f Dockerfile.fimidara-server-node
  ```
  - Run `local` & `dev` (run from `./fimidara-server-node`):
  ```bash
  docker-compose -f ../docker/compose.fimidara-server-node-local-dev.yaml --project-directory $(pwd) up
  ```
  - Run `production` & `amd64` (run from preferred dir):
  ```bash
  docker-compose -f ../docker/compose.fimidara-server-node.yaml --project-directory $(pwd) up
  ```
