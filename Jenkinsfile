pipeline{
    agent any
    parameters{
        string(name: 'SPEC',defaultValue: "cypress/integration/**/**", description: "enter the script path")
        choice(name: 'BROWSER',choices:['chrome','edge','firefox'],description: "Choice the browser where")
    }
    stages{
stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

post{
    always{
publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])    }
    success{
        echo "====++++only when successful++++===="
    }
    failure{
        echo "====++++only when failed++++===="
    }
}
}            