pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage('Install Dependecies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}