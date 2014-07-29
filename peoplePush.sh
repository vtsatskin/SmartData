#!/bin/sh

# Builds the website and uploads to people space
# Site should be accessible at
#    https://people.mozilla.org/~vtsatskin/secure/SmartData/

wintersmith build
# Repalce occurances of /images with images in generated html files. fuck sed.
sed -i '' 's/\/images/images/g' build/*.html
rsync -avz build/ people:public_html/secure/SmartData/

# Upload public files
rsync -avz build/ people:public_html/specs/SmartData/
ssh people "rm ~/public_html/specs/SmartData/index.html"
ssh people "mv ~/public_html/specs/SmartData/specs.html ~/public_html/specs/SmartData/index.html"
