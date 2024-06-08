FROM mcr.microsoft.com/playwright:v1.44.1-jammy

ENV LANG=ja_JP.UTF-8

RUN apt-get update && \
    apt-get install -y fontconfig language-pack-ja fonts-noto-cjk git unzip wget && \
    fc-cache -fv

RUN mkdir -p -m 755 /etc/apt/keyrings && \
    wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \ && chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null && \
    apt-get update && \
    apt-get -y install gh && \
    rm -rf /var/lib/apt/lists/*
