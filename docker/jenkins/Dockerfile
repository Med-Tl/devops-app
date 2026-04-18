FROM jenkins/jenkins:lts

USER root

# update repos + install required dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    wget \
    unzip \
    libatomic1 \
    && rm -rf /var/lib/apt/lists/*

USER jenkins
