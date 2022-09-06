FROM node:14.17.1


COPY . .
RUN npm install
RUN npm install --prefix client
RUN npm run build
ENV NODE_ENV=production

EXPOSE 4000
CMD npm start
