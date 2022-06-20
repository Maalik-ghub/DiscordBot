const discord = require("discord.js")
const client = require("../index.js")

module.exports = {
name: "nick",
description: "nick commands",

async execute(message , args) {


  const p = await client.prefix(message)


  const {guild, channel} = message

                        //PERMISSION CHECKS
  if (!message.member.permissions.has("MANAGE_NICKNAMES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
  const noNickPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_NICKNAMES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_NICKNAMES")) return message.channel.send({embeds: [noNickPerms]});

  const usageEmbed = new discord.MessageEmbed()
  .setColor([227, 114 ,237])
  .setDescription(`${p}nick [USER] [NEW-NAME] \n \neg: \n||${p}nick @Maalik#0658 Malik||`)
  if(!args[0]) return message.channel.send({embeds: [usageEmbed]})

    var user = message.mentions.users.first()

    const noUser = new discord.MessageEmbed()
    .setColor([227, 114 ,237])
    .setDescription(`Mention a member to changer their nickname.`)
    if(!user) return message.channel.send({embeds: [noUser]})

    const member = guild.members.cache.get(user.id);


let nickname = args.slice(1).join(" ")
const noNickname = new discord.MessageEmbed()
.setColor([227, 114 ,237])
.setDescription(`Provide a new name to change the old one`)
if(!nickname) return message.channel.send({embeds: [noNickname]});

const nickfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Failed :x:")
.setDescription(`I Can't Change ${user.username}'s Nickname. \n \n Reason:- I Dont Have Permission Above Him/Her .`)
.setTimestamp();

if(!member.kickable) return message.channel.send({embeds: [nickfail]});

const nickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(`Successfully Changed ${user.username}'s Nickname To ${nickname}`)
.setTimestamp();



try {
member.setNickname(nickname);

message.channel.send({embeds: [nickdone]});
} catch (error) {

message.channel.send({embeds: [nickfail]});

  }
 }
 };
