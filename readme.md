## Refactor Example

### Setup

Install docker and docker-compose

    docker-compose build
    docker-compose run workshop

### Push to Dokcerhub

    docker login
    docker tag promisesworkshop_workshop oreng/promises-workshop:1.0.0
    docker push oreng/promises-workshop:1.0.0
