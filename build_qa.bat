@echo off
echo Building Docker image for qa...
docker build --build-arg NODE_ENV=qa -t my-ui-app:qa .