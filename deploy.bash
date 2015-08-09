#!/bin/bash

project_name=halunka_ch

cd /var/docker/halunka.ch && \
git pull && \
demeteorizer && \
cp settings.json .demeteorized/ && \
docker build -t ${project_name} . && \
docker stop ${project_name} && \
docker rm ${project_name} && \
docker run -dp 3335:80 --link mongo_${project_name}:mongo --name ${project_name} --restart=always ${project_name}
