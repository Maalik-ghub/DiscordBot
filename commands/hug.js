const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'hug',
description: 'hug Command',


async execute(message, args){



 const { guild, channel } = message

                        //PERMISSION CHECKS
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

 var user = message.mentions.users.first()

 if (!user) {
   var user = message.member.user
 }

const member = guild.members.cache.get(user.id)

  let hugs = [`https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif`,`https://i.imgur.com/r9aU2xv.gif?noredirect`, `https://i.imgur.com/r9aU2xv.gif?noredirect`,`https://media4.giphy.com/media/od5H3PmEG5EVq/giphy.gif`, `https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif`, `https://1.bp.blogspot.com/-JUqgHJmjyDs/YG76cI82URI/AAAAAAAAD_w/0QtzGkpiel0OlTVEdRCDLmK5Ot46rEq8QCLcBGAsYHQ/s300/romantic%2Banime%2Bhug%2Bgif1.gif`, `https://i.pinimg.com/originals/f9/e9/34/f9e934cddfd6fefe0079ab559ef32ab4.gif`, `http://pa1.narvii.com/6757/cc32159df3ccb86eeb60c491a48264972777bbfc_00.gif`]

  let result = Math.floor((Math.random() * hugs.length));


    const hugEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} Hugged ${user.username}`)
   .setImage(hugs[result])


  message.channel.send({embeds: [hugEmbed]})
  }
  };
