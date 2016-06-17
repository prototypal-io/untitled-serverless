# untitled-serverless

## Deploying to AWS Lambda & API Gateway

The _serverless directory contains a serverless project (generated with sls project create _serverless), and the _serverless/_auto directory is the target for the automatically built artifacts.

To deploy:

```bash
node demo-app-prepare-deploy.js
cd _serverless
sls dash deploy
```


