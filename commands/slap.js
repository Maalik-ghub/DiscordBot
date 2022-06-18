const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'slap',
description: 'slap Command',


async execute(message, args){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send("<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me");


 var user = message.mentions.users.first()

 if (!user) {
   var user = message.member.user
 }

const member = guild.members.cache.get(user.id)

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(` I Will Slap You If You Try To Slap ${user.username}! `)
.setTimestamp();

if (user.bot) return message.channel.send({embeds: [botembed]})


  let slap = [`https://c.tenor.com/Ws6Dm1ZW_vMAAAAM/girl-slap.gif`, `https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif`,`https://i.imgur.com/fm49srQ.gif?noredirect`, `https://i.imgur.com/9GxTsgl.gif`, `https://i.gifer.com/4IXU.gif`, `https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif`, `https://i.imgur.com/SMskPot.gif`]

  let result = Math.floor((Math.random() * slap.length));


    const slapEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setAuthor(`${message.author.username} Slapped ${user.username}`)
   .setImage(slap[result])
   .setTimestamp();


  message.channel.send({embeds: [slapEmbed]})
  }
};
