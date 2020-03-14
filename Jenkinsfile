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
        sh 'yarn test'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
