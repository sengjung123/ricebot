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
client.on("ready", () => {
  console.log("I am ready!");
});



client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) {
    const msg = message.content.toLowerCase()    
    if (msg.startsWith("hewwo")){
      message.channel.send("HEWWO IT ME RICE BOT");
    } else
    if (msg.startsWith("henlo")){
      message.channel.send("Henlo it's mi Rice Bot uwu");
    } else
    if (msg.includes("empty")){
     const yeet = client.emojis.get("485106980038639627");
     message.channel.send(`${yeet}`);
    } else
    if (msg.includes("alexa")){
     message.channel.send("https://www.youtube.com/watch?v=40qJapBsOp4");
    } 
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  switch (command) {
  case "unzips" :
    message.channel.send("uwu whats this?");
    break;
  case "hewwo" :
    message.channel.send("owo whats this?");
    break;
  case "dab2" :
    message.react("485123968529989632");
    break;
  case "dab" :
    message.react("485105183454527492");
    break;
  case "empty" :
    message.react("485106980038639627");
    break;
  case "blah" :
    message.channel.send('Meh.');
    break;
  case "rules":
    const embed = new Discord.RichEmbed()
      .setTitle("Here's a link to our discord server")
      .setURL("https://discord.gg/nBqE3AM")
      .setDescription("We're a group of filthy memers. Hope you enjoy your stay here!")
      .setColor(7619392)
      .setTimestamp()
      .setFooter("el presidente", "https://cdn.discordapp.com/avatars/267304539990786058/c5408a0558c5be813c7003e4468afb0f.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/485006587094630412/485109650153537537/isit.jpg")
      .setAuthor("Welcome to the Meme Team™", "https://cdn.discordapp.com/avatars/267304539990786058/c5408a0558c5be813c7003e4468afb0f.png")
      .addField("Rules", "➤To build AT LEAST 1x low grade constructions every day,  tho 10x every day would be preferable \
to get them sweet sweet embers! (admins will keep track of the log so anyone who leeches gets yEETED)\n\
➤ Don't be inactive for over 7 days without lettin one of the admins know\n\
➤ Help out our fellow memers with daily missions as much as you can\n➤ Have fun, and join our discord if you can!", false)
      .addBlankField(true)
      message.channel.send({ embed });
    break;
  }  
});