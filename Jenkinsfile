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

        stage('Docker Compose Up') {
            steps {
                script {
                    // Run docker compose but don't fail pipeline if error
                    sh '''
                    cd docker
                    docker compose up -d || true
                    '''
                }
            }
        }

        stage('Docker Status') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }
}
