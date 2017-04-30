# Serverless setup

## Toolings
* Install https://serverless.com/
* Install https://httpie.org/

## Serverless Cli
```bash
sls help
sls deploy
sls remove -v
sls invoke --local -f hello
sls logs -f createAccounts
```

## Building with Serverless webpack

```bash
# build
sls webpack

# invoke
export SLS_DEBUG=true
sls webpack invoke -f hello
sls webpack invoke -f health

```

# Httpie Cli
* http -v --json POST https://6xrpd11ej4.execute-api.ap-southeast-2.amazonaws.com/dev/partners firstName=T lastName=S
* http -v GET https://6xrpd11ej4.execute-api.ap-southeast-2.amazonaws.com/dev/partners/110eb776-5859-4a99-98db-d403f9d39a0b

# Ref
https://github.com/apex/apex
https://github.com/aws/aws-sdk-js

##Things to do
* Dynamo db creation
* VPC and IAM roles
* Unit tests (Jest, Yarn)
* Api certificate
* Function calls metrics (<=1m, 30m, 60m, 24hr), throttling, errors
* Monitoring
* API doc
* JSON api

