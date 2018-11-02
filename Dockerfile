
        FROM node:6
        MAINTAINER Anni <elly@crane.ai>
        
        RUN mkdir -p /server
        COPY . /server
        WORKDIR /server
        RUN npm install --production
        
        ENV PORT 8080
        EXPOSE  $PORT
        
        CMD ["npm", "start"] 