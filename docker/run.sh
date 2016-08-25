#!/usr/bin/env bash
sed -i s/localhost:8080/$CEP_API_URL/ /www/config/environment.json

nginx -g 'daemon off;'
