#The Problem:
Build a service and client application to demonstrate a concept of your choosing.

#The Concept:
Present sports team data to end users in a visually interesting manner. (The Reach Goal: Make a gambler’s life a bit more fun and interactive!)

#Tools Implemented:
	- Ruby Scraper - Utilize the Nokogiri gem to retrieve, then manipulate NHL data.
	- Structure JSON data for 18 years of the original six teams.
	- MongoDB - to store complex data in JSON format
	- Exposed API - for data retrieval via AJAX calls from the client application
	- Express - for rendering views and partial HTML configurations
	- Node - platform designed to support data-intensive applications
	- d3 - data visualizations to only be limited by one’s own imagination

#MVP:
Delivered 6/1/2015 - an (unstyled) chart is rendered for each team displaying wins vs losses in team colors for each regular season since 1997-1998.

#Version 2.0:
Delivered 6/10/2015 - a (styled) pair of charts is rendered for each team, displaying wins vs losses in team colors, as well as goals scored vs goals allowed for each regular season since 1997-1998.

##Landing Page:
![assets/0_Original Six.png]

##Blackhawks Page:
![assets/1_Blackhawks.png]()

##Bruins Page:
![assets/2_Bruins.png]()

#Version 3.0 (the one for the dreamers): Delivery TBD, Milestones:
	- Added styling considerations (responsive design & mobile user considerations)
	- Corrected / Implemented chart titles and descriptions for clarity
	- Added interactions and animations for data illustration
	- The ability to select two teams and compare their data on the same page in real time
	- Some general stat rendering applicable for all teams (ie: mapping Stanley Cup Wins)
	- Ability to toggle between a team’s regular season and playoff season statistics
	- Further data collection and manipulation
