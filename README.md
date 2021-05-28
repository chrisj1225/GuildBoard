![image](https://user-images.githubusercontent.com/67344536/119151800-bc3f1200-ba1d-11eb-87fd-63ebbe4eb211.png)


# What is GuildBoard?
* GuildBoard is a clone of the popular voice, video and text communication service known as Discord. The main purpose of this application is to provide groups of like-minded individuals unified by a shared interest or purpose (a Guild) to come together and discuss their thoughts and ideas instantaneously on shared servers/platforms (a Board). 
* Feel free to try it out here: https://guildboard.herokuapp.com/#/

## Table of Contents

## Getting Started

## Features 
* Live instant message chatting between users to come share their wonderful ideas in real time. 
* Unlimited server creation for users to gather in and discuss a singular topic or theme. 
* Within each server, users can also create channels to further subdivide their team to have more focused conversations. 

## Technologies
* Guildboard was built with a Ruby on Rails backend and a Postgres database management system. On the front end side, React and Redux were used for component and state management and were styled with SCSS modules. Lastly, Rails' ActionCable and Redis were used to seamlessly integrate WebSockets into the application to create a persistent bi-directional 'full-duplex' connection between the user and server which gives the live chat feature the 'real-time' effect.   

## Challenges
### ActionCable and Websockets
* 
### User Interface and Experience
* For any live chatting service, an intuitive user interface and responsivity to user commands is just as if not more important the live-chatting feature itself. If the application doesn't function exactly as it should, nobody will want to use it. For instance, if a user clicks on a server icon in the server sidebar, the app should instantly load and display all users, channels, and messages within that server. With a desire to achieve this level of functionality, the question was asked several times:
### Store Messages in Local State or Redux State?
* While the answer may seem somewhat obvious now, when WebSockets were first successfully implemented on this application, messages sent into the stream by users were created, stored in the backend and immediately broadcasted back to the front end where they were stored in the current channel's local state. 
* When a user entered a channel and previous messages had to be loaded, the current channel's subscription would fire off a `load` command which would then query the database, find all messages with the correct channel id and broadcast them back to the channel where they would be stored in local state. 
* While this may not seem like a terrible solution, it was mentioned earlier that the desired functionality was to fetch a server's members and messages all at once.

## Development
