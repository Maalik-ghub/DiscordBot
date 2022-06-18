const discord = require("discord.js");
const client = require("../index.js")


module.exports = {
name: 'punch',
description: 'punch Command',


async execute(message, args){


 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);


 var user = message.mentions.users.first()

 if (!user){
   var user = message.member.user
 }

const member = guild.members.cache.get(user.id)

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(` Backoff {message.author.username}, \n You Will Hurt Yourself :unamused: `)
.setTimestamp();

if (user.bot) return message.channel.send({embeds: [botembed]})



let punch = [`https://i.makeagif.com/media/10-04-2015/2rtp-R.gif`, `https://animeislife449.files.wordpress.com/2016/10/giphy-2.gif?w=362&h=183`,`https://c.tenor.com/hs6GB44v8aQAAAAM/one-punch-man-%E3%83%AF%E3%83%B3%E3%83%91%E3%83%B3%E3%83%9E%E3%83%B3.gif`, `https://i.pinimg.com/originals/8a/ab/09/8aab09880ff9226b1c73ee4c2ddec883.gif`, `https://giffiles.alphacoders.com/131/13126.gif`, `https://i.pinimg.com/originals/81/2c/38/812c384875e4b52dbd7c34d6d8480fb7.gif`, `https://i.makeagif.com/media/2-20-2017/qtQ8dy.gif`]

  let result = Math.floor((Math.random() * punch.length));


    const punchEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} Punched ${user.username}`)
   .setImage(punch[result])
   .setTimestamp();


  message.channel.send({embeds: [punchEmbed]})
  }
  };
