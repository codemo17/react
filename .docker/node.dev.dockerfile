#default `node` image
FROM node:6

MAINTAINER shn0by

#opt for `yarn` instead of `npm`
#source `yarn` from origin && install
ENV YARN_VERSION=0.20.0 HOME=/code
ADD https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v${YARN_VERSION}.tar.gz /opt/yarn.tar.gz

#copy external scripts and run
ADD /.docker/scripts/yarn-install.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/yarn-install.sh
RUN /usr/local/bin/yarn-install.sh

#copy working package.json
COPY package.json $HOME/
WORKDIR $HOME/

#install dependencies
RUN yarn

#copy working files
COPY . $HOME/

#expose port
EXPOSE 6060

#kick off `npm dev`
CMD ["npm", "run", "start"]
