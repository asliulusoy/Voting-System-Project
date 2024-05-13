# Project Overview

This project aims to provide a platform for registered users to cast their votes with certain regulations and share the results instantly in a transparent manner.

## Project Features

- **User Registration**: Students register to the system. Their registered information is encrypted and stored on MongoDB.
- **Dashboard**: Registered students can view uploaded projects, access their dashboard, view their profile, and log out.
- **Voting**: On voting day, each user has one vote for each project, rated from 1 to 5 stars.
- **Live Ranking**: Project rankings are shared as a graph during voting.
- **Secured Voting**: Once the voting period ends, the results are finalized and users can no longer vote.

## Technical Stack

- **Backend**: Node.js
- **Database**: MongoDB
- **Authentication**: jsonwebtoken, bcrypt
- **Session Management**: cookieparser
- **Countdown**: clock.js
- **Data Visualization**: chart.js
- **Deployment**: Docker, Heroku
- **CI/CD**: Github triggers

## Project Outcomes

- Transparent voting for projects in our school
- Identification of the top 3 most popular projects

## Project Significance

This project demonstrates the ability to build a fully functional and secure voting system using Node.js. The implementation of features such as live ranking, countdown timer, and data visualization enhances the user experience and ensures transparency in the voting process. Additionally, the use of Docker and Heroku for deployment and Github triggers for CI/CD showcases the adoption of modern DevOps practices.

## Future Enhancements

- Integration with social media platforms
- Implementation of a more robust user authentication system
- Addition of features for project management and collaboration

**Keywords**: Node.js, Voting System, MongoDB, jsonwebtoken, bcrypt, cookieparser, clock.js, chart.js, Docker, Heroku, Github triggers, CI/CD
