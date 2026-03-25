pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "sharath4802"
        IMAGE_NAME = "register"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t %DOCKERHUB_USER%/%IMAGE_NAME% .'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    bat 'docker run -d -p 3000:3000 %DOCKERHUB_USER%/%IMAGE_NAME%'
                }
            }
        }
    }
}
