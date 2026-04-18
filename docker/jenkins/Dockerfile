FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install -y \
    curl \
    git \
    wget \
    unzip \
    libatomic1 \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# allow jenkins user to use docker
RUN usermod -aG docker jenkins

USER jenkins
