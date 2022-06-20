const discord = require("discord.js");
const client = require("../index.js")
const { afk } = require("../Collection/afk3.js")

module.exports = {
name: 'afk-remove',
description: '8ball Command',

async execute (message , args) {

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

const helpEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}afk-remove [USER] \n \neg: ||${p}afk-remove @Maalik#0568||`)
if(!args[0]) return message.channel.send({embeds: [helpEmbed]})


  const user = message.mentions.users.first();

  const noUser = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Please mention a member`)
  if (!user) return message.channel.send({embeds: [noUser]});

  const member = guild.members.cache.get(user.id)

  const getData = afk.get(member + message.guild.id);

    const [ timestamp, reason, afkNickname] = getData;

    const noData = new discord.MessageEmbed()
    .setColor([227, 114, 237])
    .setDescription(`${user.username} is not in afk mode.`)
  if(!getData) return message.channel.send({embeds: [noData]})

  afk.delete(member + message.guild.id ,[Date.now(), reason],);

  const removedAfk = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Successfully removed afk of ${user.username}`)
  message.channel.send({embeds: [removedAfk]});

    if(!member.kickable) return;

    member.setNickname(`${afkNickname}`)
}
}
