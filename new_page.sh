#!/bin/bash

FILE_BASE_NAMES="pages/${1}/${1}"

mkdir "pages/${1}"
sed "s/TEMPLATE/${1}/g" "template/template.html" > "${FILE_BASE_NAMES}.html"
sed "s/TEMPLATE/${1}/g" "template/template.css"  > "${FILE_BASE_NAMES}.css"
sed "s/TEMPLATE/${1}/g" "template/template.js"   > "${FILE_BASE_NAMES}.js"