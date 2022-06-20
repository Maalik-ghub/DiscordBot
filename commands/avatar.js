// Avatar Part
const discord = require("discord.js");
const client = require("../index.js")
require('dotenv').config();
const axios = require("axios")

module.exports = {
name: 'avatar',
description: 'avatar Command',


async execute(message, args){

   const { guild, channel } = message

                        //PERMISSION CHECKS
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);


 var user = message.mentions.users.first()
  if(!user) {
    user = message.member.user;
  }

try {
const data = await axios.get(`https://discord.com/api/users/${user.id}`,{
  headers:{
    Authorization: `Bot ${client.token}`
  }
}).then(data => data.data);
if(data.avatar) {
  let url = data.avatar.startsWith("a_")?".gif?size=4096":".png?size=4096"
  url = `https://cdn.discordapp.com/avatars/${user.id}/${data.avatar}${url}`
  const avatarEmbed = new discord.MessageEmbed()
  .setColor([227 ,114 ,237])
  .setTitle(`Avatar of ${user.tag}`)
  .setImage(url)
  message.channel.send({embeds: [avatarEmbed]})
} else {
  const noavatarEmbed = new discord.MessageEmbed()
  .setColor([227 ,114 ,237])
  .setDescription(":x: User Has No Avatar")
  message.channel.send({embeds: [noavatarEmbed]});
}
}catch(err){
  console.log(err)
}

 }
 };
