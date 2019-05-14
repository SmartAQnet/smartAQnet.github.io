# This dockerfile specifies a service to run gulp against the asset folder
# This file can be used to create containers from its image. However,
# the preferred way is to use the docker-compose projects in /dev/
FROM node:11.15.0-stretch-slim
WORKDIR /src/
COPY ["package.json", "package-lock.json", "/src/"]
RUN ["npm", "install"]
WORKDIR /src/mnt/
USER node