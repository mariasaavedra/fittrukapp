FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY .env ./.env
COPY tsconfig.json ./tsconfig.json
COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
# COPY jest.config.js ./jest.config.js

CMD ["yarn", "dev"]
