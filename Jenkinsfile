pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage('Install Dependecies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}