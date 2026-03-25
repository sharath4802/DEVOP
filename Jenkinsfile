pipeline {
    agent any

    environment {
        IMAGE_NAME = "register"
        DOCKERHUB_USER = "sharath4802"
    }

    stages {

        

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKERHUB_USER}/${IMAGE_NAME}")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    bat 'docker run -d -p 3000:3000 ${DOCKERHUB_USER}/${IMAGE_NAME}'
                }
            }
        }
    }
}
