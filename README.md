# README

## About

This is a sample project for engineer-ai for secret key genration and signup using that key.

## Installation

Steps for setup are
```bash
bundle install
rake db:create
rake db:migrate
rake db:seed
```

## Usage
Open localhost:3000 on browser after starting rails server using below command

```
rails s
```

## Credentials
The credentials to login are -

| Email  |Role   | Password  |
| ------------ | ------------ | ------------ |
|admin@gmail.com | Admin | heroku|

## Note
1. Please check the environment variables in your application.yml for the different credentials before initiating the setup.
2. For sake for easiness we have created an admin user and 10 secret codes using seed file.
3. We don't push application.yml in github but for ease we have provided it.
## Author
Name - Divyanshu Dadheech 
Email- divyanshudadheech@gmail.com
