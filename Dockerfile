FROM node:22
WORKDIR /app

COPY . .
WORKDIR /app/app
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 3000