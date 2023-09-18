FROM cypress/browsers:node12.8.1-chrome78-ff70
#FROM cypress/base:12.1.0
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#we make it our workdirectory
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#COPY . /app
#Install cypress dependencies in the work directory
RUN npm install
#RUN $(npm bin)/cypress verify
#RUN npx cypress run
ENTRYPOINT ["npx","cypress","run"]
CMD [""]
