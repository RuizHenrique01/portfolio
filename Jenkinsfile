pipeline {
    agent any
    tools {nodejs "node"}

     environment {
        HOST = credentials('FTP_HOST')
        USER = credentials('FTP_USER')
        PASSWORD = credentials('FTP_PASSWORD')
        REMOTE_PATH = credentials('FTP_REMOTE_PATH')
    }

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

        stage('Deploy') {
            steps {
                script {
                    bat 'ftp -inv '
                    bat 'bye'
                }
            }
        }
    }
}