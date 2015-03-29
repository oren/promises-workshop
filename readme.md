# Promises Workshop

![pic](workshop.png)

## Run

    docker run -it oreng/promises-workshop

## Setup on your laptop

    git clone git@github.com:oren/promises-workshop.git
    cd promises-workshop

Install docker and docker-compose

    docker-compose build
    docker-compose run workshop

## Push to Dokcerhub

    docker login
    docker tag promisesworkshop_workshop oreng/promises-workshop:1.0.0
    docker push oreng/promises-workshop:1.0.0
