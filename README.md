# Rails 6 with CarrierWave. Cypress. Docker. CircleCI pipeline

    Includes basic pages for ads database and cypress tests. Rails upgraded from Rails 5.2.3.  Cypress tests included.

## Installation with Docker

1. Build docker images when running for the first time:

   `./build_docker.sh`

2. Startup:

   `docker-compose up`

Now you can view the application at:

    http://192.168.4.100:3000/

## Fixed IP

Rails server launches with a fixed IP. To remove that, modify docker-entrypoint-rails.sh and re-build image

docker-entrypoint-rails.sh:

> rm -f tmp/pids/server.pid && bundle exec rails server -b $HOST
