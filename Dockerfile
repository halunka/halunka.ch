############################################################
# https://github.com/Kriegslustig/Docker-Meteorbase
#
# Based on ubuntu:latest
############################################################

FROM ubuntu:latest
MAINTAINER Kriegslustig

RUN apt-get upgrade && \
    apt-get update && \
    apt-get install -qqy curl python make gcc g++ openssl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash -

RUN apt-get install -yqq nodejs

ADD ./.demeteorized /var/app
WORKDIR /var/app

ENV ROOT_URL='http://kriegslustig.me'
ENV PORT=80
ENV SETTINGS_FILE='settings.json'

RUN npm i

EXPOSE 80

CMD export MONGO_URL="mongodb://${MONGO_PORT_27017_TCP_ADDR}:${MONGO_PORT_27017_TCP_PORT}${MONGO_NAME}"; node main.js
