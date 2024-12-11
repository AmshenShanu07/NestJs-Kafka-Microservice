# Nest Js Fastify Kafka Microservice

- To Run the kafka docker service use this cmd:
```
export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)
docker-compose up
```
- to run all service at a time use ```npm run start:dev```
- to run admin service ```npm run dev:admin```
- to run auth service ```npm run dev:auth```
- to run bookmark service ```npm run dev:bookmark```
- to run notification service ```npm run dev:notification```

| Add Proper env files to auth and bookmark service to connect to mongodb example env file:
```
PORT=5300
MONGODB_URI='mongo db uri'
```