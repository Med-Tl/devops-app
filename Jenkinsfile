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

        stage('Docker Build') {
            steps {
                sh 'docker --version'
            }
        }
    }
}
