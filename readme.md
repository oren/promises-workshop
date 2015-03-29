## Refactor Example

### Setup

Install docker and docker-compose

    docker-compose build
    docker-compose run web
    docker-compose run --entrypoint node web index-promises.js

### Misc

    docker-compose run --entrypoint sh web
