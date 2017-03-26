FROM node:latest
MAINTAINER Vaclav Adamec <vaclav.adamec@suchy-zleb.cz>

RUN apt-get update \
    && apt-get -y install host \
    && apt-get clean

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/vault-pki-client && cp -a /tmp/node_modules /opt/vault-pki-client/

COPY . /opt/vault-pki-client
WORKDIR /opt/vault-pki-client
ENTRYPOINT ["/opt/vault-pki-client/run.sh"]
