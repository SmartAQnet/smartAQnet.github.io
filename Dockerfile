FROM starefossen/ruby-node:2-6-alpine

ENV GITHUB_GEM_VERSION 192
ENV JSON_GEM_VERSION 1.8.6

RUN apk --update add --virtual build_deps \
    build-base ruby-dev libc-dev linux-headers \
  && gem install --verbose --no-document \
    json:${JSON_GEM_VERSION} \
    github-pages:${GITHUB_GEM_VERSION} \
    jekyll-github-metadata \
    minitest \
  && apk del build_deps \
  && mkdir -p /usr/src/app \
&& rm -rf /usr/lib/ruby/gems/*/cache/*.gem
ADD . /app
WORKDIR /app
RUN jekyll build -d ./build --verbose

FROM nginx:alpine
COPY dashboard/content /var/www/html
COPY default.conf /etc/nginx/conf.d/default.conf
ADD https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/options-ssl-nginx.conf /etc/nginx/options-ssl-nginx.conf 
ADD https://raw.githubusercontent.com/certbot/certbot/master/certbot/ssl-dhparams.pem /etc/nginx/ssl-dhparams.pem
COPY --from=0 /app/build /var/www/html
CMD ["nginx", "-g", "daemon off;"]
