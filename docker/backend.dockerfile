# Multi-stage build for backend
FROM golang:1.19 AS builder

WORKDIR /app
COPY ./backend .

RUN go build -o /app/webapi ./cmd/webapi

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=builder /app/webapi .

EXPOSE 3000
CMD ["/app/webapi"]
