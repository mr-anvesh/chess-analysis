FROM node:20

LABEL name="Java Project"
LABEL version="1.0.0"

WORKDIR /usr/app/

COPY . .

RUN npm install -g typescript
RUN npm i

ENV PORT 3000

EXPOSE 3000/tcp

ENTRYPOINT ["npm", "start"]