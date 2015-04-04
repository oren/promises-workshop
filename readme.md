# Promises Workshop

Docker container for running the [promises workshop](https://github.com/stevekane/promise-it-wont-hurt).

![docker-badge](http://dockeri.co/image/oreng/promises-workshop)

![pic](workshop.png)

## Run

    docker run -it oreng/promises-workshop

## Setup on your laptop

### prerequisites

Install docker and docker-compose

## Run

    git clone git@github.com:oren/promises-workshop.git
    cd promises-workshop
    docker-compose build
    docker-compose run workshop

## Push to Dokcerhub

    docker login
    docker tag promisesworkshop_workshop oreng/promises-workshop:1.0.0
    docker push oreng/promises-workshop:1.0.0
