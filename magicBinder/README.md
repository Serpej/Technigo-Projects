# Final project: Magic Binder

  This app is made as a part of the bootcamp from Technigo.
  Magic binder is exacly what it sounds like (at least to Magic the Gathering nerds), a binder full of you magic cards!
  The idea is that you can search for and store the cards you currently would like to sell or trade with other people. 

  It uses the tech stack: React (Router), Typescript, Node express and MongoDB. In this project I've used Claude to help me understand certain concepts. I set up a claude.md file where I explicitly told it not to show me any code unless I prompted "show code". That way I got more out of the learning process.

  --------------------------------------------------------------------------------------------------

  1. First off I set up Express to get the backEnd running, and added most of my endpoints, using Claude to understand professional architectural choices and to get a practical grip of RESTFUL API:s.

  2. Next up I set up an authentication middleware, using the bcrypt package to hash the incoming passwords. For this learning project I chose the "stale auth token method" over a JWT, the token stays the same when the user is created, but the idea behind the concepts are the same. Around this step I also connected my local MongoD data base to the backend. 

  3. When the routes and models were in place I needed somewhere to test my endpoints, so i created a form on the front-end, and managed to create (Sign Up) and Login with users. Around here I also made several iterations on what colortheme I wanted to use. First I wanted to go with the colors of the backside of a Magic The Gathering card (lots of different kinds of brown), but I ended up chosing dark blue as my main color. The header of the backside of Magic cards are in a light blue color, so I chose a similar for for my Header and continued on the blue theme for its "calming and trustworthy aspects". The accent colors became purple for it's "Royal" qualities. I want the user to feel entitled to pressing a purple button on my website.  

  4. After getting my theme in place, I scouted websites like Amazon, LinkedIn and Facebook for inspiration. Then I sketched a couple of Landing pages on paper and tried to recreate it.

  5. Now I needed to connect the ScryfallAPI to my search engine and make a popup module for cardDetails. This was a new concept for me and it took me a while to get it right using React Router (passing a background and a location in location state and using them conditionally). This step is important in the process, since I need something to add to the user's binder later.

  6. 

  Due to a deadline I have cut some importany parts of this app. If I had more time I would create a messaging feature, where two users could communicate interest for another's cards. Right now this is meant for a smaller community where you already have other ways of contacting eachother.

## View it live (cold server)
[NETLIFY LINK](https://magicbinder.netlify.app/)


