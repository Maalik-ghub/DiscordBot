const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'warn',
description: 'help Command',


async execute(message, args){

    const p = await client.prefix(message)

    if (!message.member.permissions.has("MODERATE_MEMBERS", "ADMINISTRATOR")) return;

const {guild, channel} = message

const noWarnArg = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}warn [USER] [REASON] \n \neg: \n${p}warn @Maalik#0568 nsfw \n${p}warn 9847927323847239 nsfw`)
if(!args[0]) return message.channel.send({embeds: [noWarnArg]});

const userOne = message.mentions.users.first();
const reason = args.slice(1).join(" ") || "Reason was not provided";

if(!userOne) {
  let userTwo = args[0];
  try{
  let memberOne = await guild.members.fetch(userTwo);

  const higherRole = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`You can't warn ${memberOne.user.username}`)
 if(memberOne.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({embeds: [higherRole]});

  const warnEmbed = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`${memberOne} you were warned in ${message.guild.name} for:- \n \n ${reason}`)
  memberOne.send({embeds: [warnEmbed]});

  const successWarn = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Successfully Warned ${memberOne}`)
  message.channel.send({embeds: [successWarn]})

} catch(err) {
  console.log(err)
  const noMember = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription("Member Doesn't exist :x:")
 return message.channel.send({embeds: [noMember]});
}
} else {
const memberTwo = guild.members.cache.get(userOne.id)

const higherRole = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`You can't warn ${memberTwo.user.username}`)
if(memberTwo.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({embeds: [higherRole]});

const warnEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${memberTwo} you were warned in ${message.guild.name} for:- \n \n ${reason}`)

memberTwo.send({embeds: [warnEmbed]});
const successWarn = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`Successfully Warned ${memberTwo} For:- \n \n ${reason}`)
message.channel.send({embeds: [successWarn]})
}
}
}
