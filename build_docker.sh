#!/bin/bash

# get group ID of docker, for running "docker exec"
docker build --build-arg UID=$(id -u) --build-arg GID=$(getent group docker | cut -d: -f3) -f ./Dockerfile_cypress -t mycypress .
docker build --build-arg UID=$(id -u) --build-arg GID=$(id -g) -f Dockerfile_rails . -t myrails6project
