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

        // stage('Tests') {
        //     steps {
        //         bat 'npm run test'
        //     }
        // }

        stage('Deploy') {
            steps {
                script {
                    bat ''' 
                        @echo off
                        echo user %LOGIN_USR% %LOGIN_PSW% > ftpcmd.dat
                        echo binary >> ftpcmd.dat
                        echo cd %REMOTE_PATH%assets >> ftpcmd.dat
                        echo lcd dist/assets >> ftpcmd.dat
                        echo mput * >> ftpcmd.dat
                        echo cd /public_html/ >> ftpcmd.dat
                        echo lcd .. >> ftpcmd.dat
                        echo mput * >> ftpcmd.dat
                        echo bye >> ftpcmd.dat
                        ftp -inv -s:ftpcmd.dat %HOST%
                        del ftpcmd.dat
                    '''
                }
            }
        }
    }
}