FROM alpine:latest
RUN apk add --no-cache ca-certificates unzip bash

ADD https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb && \
    chmod +x /pb/pocketbase && \
    rm /tmp/pb.zip

COPY pb_migrations /pb/pb_migrations
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 8080

CMD ["/start.sh"]
