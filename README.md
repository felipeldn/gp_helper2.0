# GP Helper
A clinical dashboard to allow GPs to integrate wearable health tech into their local patients.

## Motivation
Having spent the majority of my time during the Coronavirus pandemic working in a GP clinic in one of London's most affected areas - I have seen first hand the struggle clinicians go through in trying to obtain and enter accurate, up-to-date data on particular patients. It was with the help of their suggestions that I decided to build GP Helper. 

## Tech/framework used
<b>Built with</b>
- Ruby on Rails API
- React.js (Redux/Hooks)

## Installation
From your command line:
### Clone the repository
```bash
$ git clone git@github.com:felipeldn/gp_helper2.0.git
```

### Backend Setup
```bash
$ cd backend
$ bundle install
$ rails db:create db:migrate db:seed
$ rails s
```

### Frontend Setup
```bash
$ cd client
$ npm install
```

### Run the app
```bash
$ npm start
```

#### If you see the following:
```
? Something is already running on port 3000. Probably:
  puma 3.12.1 (tcp://localhost:3000) [backend]   (pid 49917)
  in /Users/felipecruz/Documents/Projects/React/gp_helper2.0/backend

Would you like to run the app on another port instead? (Y/n) 
```
#### Select 'Y'

### Other setup

A few things to know about the seed data. The contacts (appointments) are hard coded to the current date so if you log in the day after you have seeded the database you will not see any patients. To fix this run the following command:

```bash 
$ rails db:drop db:create db:migrate db:seed
```

To login use the username 'TestUser' and the password will be set to '12345'
