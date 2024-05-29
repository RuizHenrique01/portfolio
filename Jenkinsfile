pipeline {
    agent any
    tools {nodejs "node"}

     environment {
        HOST = credentials('FTP_HOST')
        LOGIN = credentials('FTP_LOGIN')
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
                    bat """
                        @echo off 
                        echo user user pass > ftpcmd.dat 
                        echo bye >> ftpcmd.dat 
                        ftp -n -s:ftpcmd.dat \$HOST
                        del ftpcmd.dat'
                    """
                }
            }
        }
    }
}