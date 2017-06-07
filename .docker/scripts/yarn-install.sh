#!/bin/sh

DIR_YARN=/opt/yarn
#copy yarn to local
mkdir -p "$DIR_YARN"
tar -xzf /opt/yarn.tar.gz -C "$DIR_YARN"
ln -s "$DIR_YARN/dist/bin/yarn" /usr/local/bin
rm /opt/yarn.tar.gz


