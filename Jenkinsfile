pipeline {
    agent any

    tools {
        maven 'maven3'
        nodejs 'node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                url: 'https://github.com/Med-Tl/devops-app.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'cd backend/demo && mvn clean package -DskipTests'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }

        stage('Prepare Environment') {
            steps {
                sh '''
                    sudo systemctl stop postgresql || true
                    sleep 5
                '''
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh '''
                    cd docker
                    docker compose down || true
                    docker compose up -d --build
                '''
            }
        }

        stage('Verify Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
