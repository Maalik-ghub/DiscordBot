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
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);

const helpEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}afk-remove [MEMBER-MENTION] \n \n'eg: ${p}afk-remove @Maalik#0568'`)
if(!args[0]) return message.channel.send({embeds: [helpEmbed]})


  const user = message.mentions.users.first();

  if (!user) return message.channel.send("**:x: ┃ Specify a member**");

  const member = guild.members.cache.get(user.id)

  const getData = afk.get(member + message.guild.id);

    const [ timestamp, reason, afkNickname] = getData;

  if(!getData) return message.channel.send("**:x: ┃ Mentioned member is not in afk**")

  afk.delete(member + message.guild.id ,[Date.now(), reason],);

  message.channel.send(`**:white_check_mark: ┃ Removed Afk Of [${member.user.username}]**`)

    if(!member.kickable) return;

    member.setNickname(`${afkNickname}`)
}
}
console.log("[+] Loaded afk-remove command....")
