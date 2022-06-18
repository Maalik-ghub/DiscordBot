const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'kiss',
description: 'kiss Command',


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
.setDescription(` Ewwww ${message.author.username}, \n ${user.username} Dont Wanna Kiss Your Dirty Lips`)

if (user.bot) return message.channel.send({embeds: [botembed]})


  let kiss = ['https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif',
              'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
              'https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif',
              'https://c.tenor.com/8ZcxRredX44AAAAC/kiss-anime.gif',
              'https://c.tenor.com/7T1cuiOtJvQAAAAC/anime-kiss.gif',
              'https://c.tenor.com/I1npxSu_yz0AAAAC/anime-kiss.gif',
              'https://c.tenor.com/dJU8aKmPKAgAAAAM/anime-kiss.gif',
              'https://c.tenor.com/hK8IUmweJWAAAAAC/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E.gif',
              'https://c.tenor.com/nRdyrvS3qa4AAAAC/anime-kiss.gif',
              'https://c.tenor.com/yoMKK29AMQsAAAAC/kiss-toradora.gif',
              'https://c.tenor.com/SqpFZQfcyEgAAAAC/anime-kiss.gif',
              'https://c.tenor.com/4ofp_xCUBxcAAAAC/eden-of-the-east-akira-takizawa.gif',
              'https://c.tenor.com/F02Ep3b2jJgAAAAC/cute-kawai.gif',
              'https://c.tenor.com/_srv-YHvrjUAAAAC/anime-kiss.gif',
              'https://c.tenor.com/2u67zOB43esAAAAd/cute-anime.gif']

  let result = Math.floor((Math.random() * kiss.length));

if(args[0] === `Malika`) {

     const merlin = await guild.members.fetch('606066358337404929');

    if(!merlin.user.id) return;

    if(message.author.id === merlin.user.id){

        const merlinkissEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor("Merli is kissing me 🤞😍 ")
   .setImage(kiss[result])

        message.channel.send({embeds: [merlinkissEmbed]})
        return;

    } else {
    message.channel.send("You are not merlin, Back off.");
        return;
    }
}

    const kissEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} is Kissing ${user.username}`)
   .setImage(kiss[result])


  message.channel.send({embeds: [kissEmbed]})
  }
  };
