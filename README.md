# Alexa Skill Boilerplate

Alexa Skill boilerplate with unit testing and virtual device development.

Update the skill ID in the `asl-config.json` if isn't already there.

Install dependencies using `npm install` over `yarn` to run the Alexa Skill locally  without issues.

Install (Bespoken)[https://bespoken.io/] for running unit tests

`npm install -g bespoken-tools`

Read more about the skill unit testing (mark up syntax)[https://read.bespoken.io/unit-testing/guide/].

### Running the Skill

`npm run start:dev`

Open the URL provided (it should be `localhost:3001`) in the browser and login using your AWS account.

If succesful copy the ngrok URL from the terminal and update the HTTPS endpoint in the Skill configuration on the Amazon Developer dashboard.

### TODO

- Configure Babel to use latest features
- Add deployment script to package up source and push to lambda instance