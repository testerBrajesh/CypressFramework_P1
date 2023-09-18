# CypressFrameworks
Step 1: Install Node JS, Please find the below screen
https://www.nodejs.org/download  
 test
















2.Node JS configuration need to add it into Environment variables.
 

 

Step 3:Install Visual Studio code
url: https://code.visualstudio.com/download

Step 4: Install Cypress 
Please follow the below official Cypress site
https://docs.cypress.io/guides/getting-started/installing-cypress
npm->Node Package Manager
Command: 1.npm init
npm install cypress –save-dev









Cypress Automation approach Flow diagram:
 
Folder structure:

 
 
 

 


How to run cypress test case:
npx cypress run --spec cypress\integration\examples\place-order.test.js --headed --browser edge
 
 
How to run Docker image local:
Create image:
docker build -t my-cypress-image:1.1.2 .

docker images
How to run the docker image:
docker run -i -v "%cd%":/my-cypress-project -t my-cypress-image:1.1.2 --spec cypress/integration/examples/*.js
How to see results:
 





