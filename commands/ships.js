const discord = require("discord.js");
const client = require("../index.js")
const { ships } = require("../Collection/ships.js")

module.exports = {
name: 'ship',
description: 'slap Command',


async execute(message, args){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(":x: Please Enable **EMBED_LINKS** Pemission For Me");

let user;
let user2;
user = message.mentions.users.at(1)
  if(!user){
      user = message.mentions.users.first();
      user2 = message.author

 if (!user) return message.channel.send("**:x: ┃ Please mention someone you wanna ship with.**")
if (user.id === message.author.id) return message.channel.send("**:x: ┃ Please mention someone else.**")

  }else{
      user2 = message.mentions.users.first();
  };

const member = await guild.members.fetch(user.id);
const member2 = await guild.members.fetch(user2.id);

let shipRandom;

 shipRandom = Math.floor((Math.random() * 99) +1);

const Users = user.id+message.author.id

const povUser = ships.get(member.user.id + member2.user.id)
const povOther = ships.get(member2.user.id + member.user.id)

if(povUser) {
  [timestamp, shipRandom] = povUser;
  let shipRandomMessage;
  if(shipRandom >= 80) {
    shipRandomMessage = `:heart_eyes:You Guys Will Be Awesome Together`
  } else if ( shipRandom >= 50) {
    shipRandomMessage = `:hearts:You Both Can Still Make It Work`
  } else if (shipRandom >= 30 ) {
   shipRandomMessage =  `:pensive: Possibly Impossible`
  } else {
    shipRandomMessage = `:broken_heart: Nothing is impossible, but you both are....`
  }

  const newEmbed = new discord.MessageEmbed()
  .setTitle(`${shipRandomMessage}`)
  .setDescription(`**${user2}'s** Chances With **${user}** Are **${shipRandom}%**`)
  .setImage("https://c4.wallpaperflare.com/wallpaper/22/690/451/kimi-no-na-wa-miyamizu-mitsuha-tachibana-taki-wallpaper-thumb.jpg")
  message.channel.send({embeds: [newEmbed]});
  ships.set(member.user.id + member2.user.id, [Date.now(), shipRandom])
  ships.set(member2.user.id + member.user.id, [Date.now(), shipRandom])
  return;
};

if(povOther) {
  [timestamp, shipRandom] = povOther;
  let shipRandomMessage;
  if(shipRandom >= 80) {
    shipRandomMessage = `:heart_eyes:You Guys Will Be Awesome Together`
  } else if ( shipRandom >= 50) {
    shipRandomMessage = `:hearts:You Both Can Still Make It Work`
  } else if (shipRandom >= 30 ) {
   shipRandomMessage =  `:pensive: Possibly Impossible`
  } else {
    shipRandomMessage = `:broken_heart: Nothing is impossible, but you both are....`
  }

  const newEmbed = new discord.MessageEmbed()
  .setTitle(`${shipRandomMessage}`)
  .setDescription(`**${user2}'s** Chances With **${user}** Are **${shipRandom}%**`)
  .setImage("https://c4.wallpaperflare.com/wallpaper/22/690/451/kimi-no-na-wa-miyamizu-mitsuha-tachibana-taki-wallpaper-thumb.jpg")
  message.channel.send({embeds: [newEmbed]});
  ships.set(member.user.id + member2.user.id, [Date.now(), shipRandom])
  ships.set(member2.user.id + member.user.id, [Date.now(), shipRandom])
  return;
};

let shipRandomMessage;
if(shipRandom >= 80) {
  shipRandomMessage = `:heart_eyes:You Guys Will Be Awesome Together`
} else if ( shipRandom >= 50) {
  shipRandomMessage = `:hearts:You Both Can Still Make It Work`
} else if (shipRandom >= 30 ) {
 shipRandomMessage =  `:pensive: Possibly Impossible`
} else {
  shipRandomMessage = `:broken_heart: Nothing is impossible, but you both are....`
}

const newEmbed = new discord.MessageEmbed()
.setTitle(`${shipRandomMessage}`)
.setDescription(`**${user2}'s** Chances With **${user}** Are **${shipRandom}%**`)
.setImage("https://c4.wallpaperflare.com/wallpaper/22/690/451/kimi-no-na-wa-miyamizu-mitsuha-tachibana-taki-wallpaper-thumb.jpg")
message.channel.send({embeds: [newEmbed]});
ships.set(member.user.id + member2.user.id, [Date.now(), shipRandom])
ships.set(member2.user.id + member.user.id, [Date.now(), shipRandom])
}
};
