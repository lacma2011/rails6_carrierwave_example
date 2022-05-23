# Rails 6 with CarrierWave

    Includes basic pages for ads database and cypress tests. Rails upgraded from Rails 5.2.3

## Installation with Docker

1. Build docker image when running for the first time:

    `docker-compose build`


2. For Cypress, enable xhost access (optional)

    `xhost +"local:docker@"`
    

3. Startup:

    `docker-compose up`


4. Seed DB if this container is running for first time:

    `docker exec $(docker ps -q -f "name=rails") bundle exec rake db:seed`

    Disregard ruby warnings.



Now you can view the application at:

    http://192.168.4.100:3000/


## Fixed IP

Rails server launches with a fixed IP. To remove that, modify docker-entrypoint-rails.sh and re-build image

docker-entrypoint-rails.sh:
>rm -f tmp/pids/server.pid && bundle exec rails server -b $HOST
