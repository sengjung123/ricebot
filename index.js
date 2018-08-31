// server.js
// where your node app starts

// init project
//var express = require('express');
//var app = express();
const { Client, RichEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
const config = require("./config.json");
const prefix = config.prefix;

client.login(process.env.SECRET);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
//app.get('/', function(request, response) {
//  response.sendFile(__dirname + '/views/index.html');
//});

// listen for requests :)
//var listener = app.listen(process.env.PORT, function() {
//  console.log('Your app is listening on port ' + listener.address().port);
//});

//const yeet = 
client.on("ready", () => {
  console.log("I am ready!");
});



client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) {
    if (message.content.startsWith("hewwo")){
      message.channel.send("HEWWO IT ME RICE BOT");
    } else
    if (message.content.includes("empty")){
     const yeet = client.emojis.get("485106980038639627");
     message.channel.send(`${yeet}`);
    } else
    if (message.content.includes("alexa")){
     const yeet = client.emojis.get("485106980038639627");
     message.channel.send("https://www.youtube.com/watch?v=40qJapBsOp4");
    } 
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  if (message.content.startsWith(prefix + "unzips")) {
    message.channel.send("uwu whats this?");
  } else
  if (message.content.startsWith(prefix + "hewwo")) {
    message.channel.send("owo whats this?");
  } else
  if (message.content.startsWith(prefix + "dab2")) {
     message.react("485123968529989632");
  } else 
  if(message.content.startsWith(prefix + "empty")) { 
     const ayy = client.emojis.get("485106980038639627");
    message.react("485106980038639627");
     //message.react(`${ayy}`);
  }  else
  if (message.content.startsWith(prefix + "dab")) {
     message.react("485105183454527492");
  }else
  if (message.content.startsWith(prefix + "rules")) {
    const embed = {
    "title": "Here's a link to our discord server",
    "description": "We're a group of filthy memers. Hope you enjoy your stay here!",
    "url": "https://discord.gg/nBqE3AM",
    "color": 7619392,
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/485006587094630412/485109650153537537/isit.jpg"
    },
    "author": {
      "name": "Welcome to the Meme Team™",
      "icon_url": "https://cdn.discordapp.com/avatars/267304539990786058/c5408a0558c5be813c7003e4468afb0f.png"
    },
    "fields": [
      {
        "name": "Rules",
        "value": "➤To build AT LEAST 1x low grade constructions every day,  tho 10x every day would be preferable to get them sweet sweet embers! (admins will keep track of the log so anyone who leeches gets yEETED)\n➤ Don't be inactive for over 7 days without lettin one of the admins know\n➤ Help out our fellow memers with daily missions as much as you can\n➤ Have fun, and join our discord if you can!"
      }
      ]
    };
    message.channel.send({ embed });
    //message.channel.send({embed});
    //message.channel.send("owo whats this?");
  }
});