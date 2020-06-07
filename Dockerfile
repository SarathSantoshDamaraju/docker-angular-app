# STEP - 1
FROM node:12.16.3 as node
RUN mkdir -p /app
# STEP - 2
WORKDIR /app
# STEP - 3
COPY package*.json /app/
# STEP - 4
RUN npm install
# STEP - 5
COPY . /app/
# STEP - 6
EXPOSE 4200
# STEP - 7
CMD ["npm", "start"]
