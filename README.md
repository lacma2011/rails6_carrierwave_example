# Rails 5 with CarrierWave and basic page for ads database


Build docker image when running for the first time:
>docker-compose build


Startup:
>docker-compose up


Seed DB if this container is running for first time:
>docker exec $(docker ps -q -f "name=rails") bundle exec rake db:seed

(disregard ruby warnings)


Now you can view the application at:

http://192.168.4.100:3000/


## Fixed IP

Rails server launches with a fixed IP. To remove that, modify docker-entrypoint-rails.sh and re-build image

docker-entrypoint-rails.sh:
>rm -f tmp/pids/server.pid && bundle exec rails server -b $HOST
