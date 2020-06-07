# STEP - 1
FROM node:12.16.3 as node
# STEP - 2
WORKDIR /app
# STEP - 3
COPY package.json ./
# STEP - 4
RUN npm install
# STEP - 5
COPY . .
# STEP - 6
RUN npm run build
# STEP - 7
FROM nginx:1.13.12-alpine
# STEP - 8
COPY --from=node /app/dist/employee-generator /usr/share/nginx/html
# STEP - 9
Expose 80
# STEP - 10
CMD ["nginx", "-g", "daemon off;"]
