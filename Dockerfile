FROM ubuntu:latest

COPY ./dist/server ./

CMD ["./server" ]