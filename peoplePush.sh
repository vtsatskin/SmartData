#!/bin/sh

# Builds the website and uploads to people space
# Site should be accessible at
#    https://people.mozilla.org/~vtsatskin/secure/SmartData/

wintersmith build
rsync -avz build/ people:public_html/secure/SmartData/
