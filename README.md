# Sports-Tournamnet-Management-System
  ABC Company private limited is about to conduct a sports festival and you are asked to design a web app which manages the dataset efficiently.

- Sports festivals have multiple tournaments.Tournaments are identified by name, sport, number of teams/persons allowed, and event type (Single/ Team).Tournaments can have registration based on the event. Team are identified by name and number of people allowed. People are identified by their name, age, address, blood group etc.

# Conditions to be met,
- The above mentioned identifiers should be unique and required in order to perform a create operation
- Participants should register in the app before they proceed to tournament registration. If you have already registered, proceed to the login page (You can have a static Admin data)
- Only Admin can add the tournament, modify the tournament and can update the status of the team/ participants as win/lose/disqualified.
- Admin should be able to view the report of data for each tournament from his home page such as number of teams/participants registered, Tournament -registration start and end time and Teams disqualified
- Admin should be able to,
- Cancel the tournament based on the number of participants
- Disqualify a team if they don't have the required number of team members during the event.
- Participants should be allowed to register or update only during a given period
- Participants will be allowed to register for multiple tournaments but not for multiple teams
- Tournaments need to be held one at a time and can only be started if the required number of teams or persons registered.
- The participants' home page should show the list of all available tournaments and registration link
- The Schedule for the tournament should be visible for the participants from their homepage if they have already registered for the tournament.

# Tech Stack Used :
- Backend - Java 
- FrontEnd - Ember.js Framework, JavaScript , HTML , CSS
- DB - PSQL 
- Tools - Git
