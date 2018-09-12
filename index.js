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
const Music = require("./musicbot.js");

const ytdl = require('ytdl-core');
const {YTSearcher} = require('ytsearcher');
const ypi = require('youtube-playlist-info');
const PACKAGE = require('./package.json');



Music.start(client, {
  youtubeKey: process.env.YOUTUBE,
  prefix: "alexa ", // Prefix for the commands.
  global: true,            // Non-server-specific queues.
  maxQueueSize: 200,        // Maximum queue size of 25.
  clearInvoker: false,      // If permissions applicable, allow the bot to delete the messages that invoke it.
  helpCmd: 'mhelp',        // Sets the name for the help command.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'adjust',     // Sets the name for the 'volume' command.
  leaveCmd: 'yeet',      // Sets the name for the 'leave' command.
  leaveAlt: ["leave", "skip"],
  disableLoop: true,        // Disable the loop command.
  anyoneCanAdjust: true,
  anyoneCanSkip: true,
  anyoneCanLeave: true,
  anyoneCanPause: true,
  enableQueueStat: true,
  disableSet: true,
  disablePause: true,
  disableResume: true,
  requesterName: true,
  botOwner: process.env.SENGJUNG123,
  botAdmins: [process.env.BLOODYRUKIA,process.env.KOSPLAISE,process.env.NIHILISTSALT]
});


client.login(process.env.TOKEN);
client.on("ready", () => {
  client.user.setStatus("online")
//  client.user.setActivity(`on ${client.guilds.size} servers`);
  .then(client.user.setActivity((`Food Fantasy for ${client.users.size} users`), { type: 'STREAMING' , url: "https://www.twitch.tv/sengjung123" }))
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

app.get("/", (request, response) => {
  console.log(Date().toLocaleString('en-US', { timeZone: 'asia/singapore' }) + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  console.log(Date.now() + " Updated");
  client.user.setActivity((`Food Fantasy for ${client.users.size} users`), { type: 'STREAMING' , url: "https://www.twitch.tv/sengjung123" })
}, 280000)

//ricebot phones home because he's hungwy uwu
var ffLunch = false; //lunch is at 4
var ffDinner = false; //dinner is at 10
var ffSupper = false; //supper is at 13
var ffPublic1 = false; //17
var ffPublic2 = false; //1
var ffPublic3 = false; //5
var ffDisaster = false; //0
//all times are in UTC
setInterval(() => {
  const ffTime = new Date();
  if ( ffTime.getHours() === 4 && !ffLunch) {
    client.channels.get("485807198857855006").send("Hewwo @everyone pwease remember to get your Omuricey lunchies!");
    ffLunch = true;
  }
  if ( ffTime.getHours() === 10 && !ffDinner) {
    client.channels.get("485807198857855006").send("Din-dins are served @everyone, don't forget to get your Garlic Lobsters owo");
    ffDinner = true;
  }
  if ( ffTime.getHours() === 13 && !ffSupper) {
    client.channels.get("485807198857855006").send("Supper! @everyone uwu pwease remember to get your Mango Wrappies before they expire.");
    ffSupper = true;
  }
  if ( ffTime.getHours() === 17 && !ffPublic1) {
    client.channels.get("485807198857855006").send("Hewwo @everyone Public Orders are up!");
    ffPublic1 = true;
  }
  if ( ffTime.getHours() === 1 && !ffPublic2) {
    client.channels.get("485807198857855006").send("Hewwo @everyone Public Orders are up!");
    ffPublic2 = true;
  }
  if ( ffTime.getHours() === 5 && !ffPublic3) {
    client.channels.get("485807198857855006").send("Hewwo @everyone Public Orders are up!");
    ffPublic3 = true;
  }
  if ( ffTime.getHours() === 0) {
    ffLunch = false;
    ffSupper = false;
    ffDinner = false;
    ffPublic1 = false;
    ffPublic2 = false;
    ffPublic3 = false;
  }
}, 1000)





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
      if (msg.includes("can you")){
        if (msg.includes("yeet")){
          const yeet = client.emojis.get("485106980038639627");
          message.channel.send("I don't know " + message.author.toString() + ", can you? "+ `${yeet}`);}
        else {
          const dab = client.emojis.get("485105183454527492");
          message.channel.send("I don't know " + message.author.toString() + ", can you? "+ `${dab}`);}}
      else if (msg.includes("will you")){
        message.channel.send("I don't know " + message.author.toString() + ", will you?");}
     //message.channel.send("https://www.youtube.com/watch?v=40qJapBsOp4");  old alexa code
    } 
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  switch (command) {
  case "unzips" :
    let unzip = args.join(' ');
    message.channel.send("uwu whats this?")
    .then(message.channel.send(`*nuzzles* *${unzip}*`))
    .catch(console.error);
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
  case "ember" :
    let a = false;
    message.channel.send("Master Attendant?");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    //console.log(collector)
    collector.on('collect', message => {
      if (message.content.toLowerCase().includes("yes ricey") && !a) {
        message.channel.send("Saving embers?");
        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 })
        a=true;
        //console.log(collector2)
        collector2.on('collect', message => {
          if (message.content.toLowerCase().includes("yes ricey")) {
            message.channel.send("Telling lies?");
            const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 })
            a=false;
            //console.log(collector3)
            collector3.on('collect', message => {
              if (message.content.toLowerCase().includes("no ricey")) {
                message.channel.send("Open vault.");
                const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 })
                //console.log(collector4)
                collector4.on('collect', message => {
                  if ((message.content.toLowerCase().includes("hahaha") || message.content.toLowerCase().includes("ha ha ha"))) {
                    const feelsOk = client.emojis.get("486158890053140505");
                    message.channel.send(`${feelsOk}`);
                } else if (!message.content.toLowerCase().includes("hahaha" || "ha ha ha")) {
                    const feelsBad = client.emojis.get("486157852277342208");
                    message.channel.send(`${feelsBad}`);
            }})
          }})
        }})
      }})
    //message.channel.send("Hello " + message.author.toString() + ", and welcome!")
    break;
  case "rules":
    if (message.author.id !== '787274481071595521') break;
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
