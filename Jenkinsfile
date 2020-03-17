pipeline {
  agent {
    docker {
      image 'node:alpine'
    }
  }
  stages {
    stage ('install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage ('lint') {
      steps {
        sh 'yarn lint'
      }
    }
    stage ('unit test') {
      steps {
        sh 'yarn test:unit:ci'
      }
      post {
        always {
          junit 'output/test-results/**/*.xml'
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll              : true,
            reportDir            : 'output/test-coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'Coverage report'
          ]
        }
      }
    }
    stage ('integration test') {
      steps {
        sh 'yarn test:integration'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
