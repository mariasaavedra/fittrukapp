FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

RUN yarn global add prisma 

RUN yarn && yarn prisma migrate && yarn build

EXPOSE 3333
EXPOSE 5432

CMD ["yarn", "start:all"]

