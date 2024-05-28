pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage('Install Dependecies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
    }
}