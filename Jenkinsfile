pipeline {
    agent any

    tools {
        maven 'maven3'
        nodejs 'node20'
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

        stage('SonarQube Analysis') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh '''
                        cd backend/demo
                        mvn sonar:sonar \
                        -Dsonar.projectKey=devops-app \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh '''
                cd docker
                docker compose up -d || true
                '''
            }
        }

        stage('Docker Status') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
