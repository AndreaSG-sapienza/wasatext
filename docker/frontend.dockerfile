# Multi-stage build for frontend
FROM node:lts as builder

WORKDIR /app
COPY ./frontend .

RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
