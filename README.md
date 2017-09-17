# New website for Saint Paschal Baylon Church

This will be new website for Saint Paschal Baylon Church.

Web technologies used for this project:

Node.js
<br />
React.js
<br />
Express.js
<br />
Mongo db
<br />
Bootstrap
<br />
React-Router
<br />
Request & Cheeio (for web scraping)
<br />
<br />

...

This website serves as the general website for all things Saint Paschal Baylon related. It features web scraping and a secured user authentication which allows an admin to login and edit upcoming events other tasks which they may need. 

# To run on your local machine

Required: 

 node.js v6.0.0+ (type "$ node --version" in your bash terminal to see if node is installed and to check the version)

In node Terminal:

	 > $ git clone git@github.com:joemulick/Saint-Paschal-Baylon-Church.git

	 > $ cd saint-paschal-baylon-church

	 > $ npm i

	 > $ cd client

	 > $ npm i

	 

In order for for this application to work you need to run two seperate servers; one for the backend (server) and one for the front end (react).

Go back one file directory and start the first server using:

	> $ cd ..

	> $ PORT=3001 node bin/www

Once the first server is running, open a new bash window inside saint-paschal-baylon-church/client (client directory):

	> $ npm start

You're holier already!






