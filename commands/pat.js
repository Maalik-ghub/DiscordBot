const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'pat',
description: 'pat Command',


async execute(message, args){
 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);


 var user = message.mentions.users.first()

 if (!user) {
   var user = message.member.user
 }

const member = guild.members.cache.get(user.id)

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(` ${user.username} Don't Like To Be Patted \n And \n Especially With Those Dirty Hands Of ${message.author.username} `)
.setTimestamp();

if (user.bot) return message.channel.send({embeds: [botembed]})


  let pat = [`https://c.tenor.com/E6fMkQRZBdIAAAAM/kanna-kamui-pat.gif`, `https://c.tenor.com/dmYhPDHbbI4AAAAM/misha-misha-necron-anos-voldigoad-the-misfit-of-demon-king-academy-headpat-pat.gif`,`https://i.pinimg.com/originals/ba/0a/18/ba0a18b4028f9c210f830f7a82a574cb.gif`, `https://c.tenor.com/jEfC8cztigIAAAAC/anime-pat.gif`, `https://c.tenor.com/2vFAxyl6cI8AAAAM/mai-headpats.gif`, `https://c.tenor.com/edHuxNBD6IMAAAAC/anime-head-pat.gif`, `https://i.gifer.com/7MOk.gif`]

  let result = Math.floor((Math.random() * pat.length));


    const patEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} is Patting ${user.username}`)
   .setImage(pat[result])
   .setTimestamp();


  message.channel.send({embeds: [patEmbed]})
  }
  };
