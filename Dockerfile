FROM 10.210.201.187:5000/library/nginx:1.1.0

COPY dist /www

COPY app/config/environment.json /www/config/
COPY docker/run.sh /app/run.sh

WORKDIR /app/
USER root

CMD ["bash", "run.sh"]
