const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'blush',
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

  let hugs = ['https://c.tenor.com/cFcwjK-MYzwAAAAC/blushing-anime-girl.gif',
              'https://c.tenor.com/20cHqgyAc8IAAAAd/marin-kitagawa-marin-kitagawa-anime.gif',
              'https://c.tenor.com/VrfSZUjiWn4AAAAC/shy-anime.gif',
              'https://c.tenor.com/yKtYfA0mizYAAAAC/my-dress-up-darling-anime-blush.gif',
              'https://c.tenor.com/A3BsH5TMakYAAAAC/anime-shy.gif',
              'https://c.tenor.com/8-F6-nB1L84AAAAC/anime-blush.gif',
              'https://c.tenor.com/qYS0n4QWxd4AAAAC/blush-anime.gif',
              'https://c.tenor.com/_uXObgxomDYAAAAd/blush-blushing.gif']

  let result = Math.floor((Math.random() * hugs.length));


    const hugEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} is blushing.`)
   .setImage(hugs[result])


  message.channel.send({embeds: [hugEmbed]})
  }
  };
  console.log("[+] Loaded blush command....")
