const discord = require("discord.js")
const client = require("../index.js")


module.exports = {
name: "nickreset",
description: "nickreset commands",

async execute(message , args) {

  const {guild, channel} = message
                        //PERMISSION CHECKS
  if (!message.member.permissions.has("MANAGE_NICKNAMES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
  const noNickPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_NICKNAMES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_NICKNAMES")) return message.channel.send({embeds: [noNickPerms]});


  var user = message.mentions.users.first()
  if (!user) {
    user = message.member.user
  };
  const member = guild.members.cache.get(user.id);

const nickrfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Failed :x:")
.setDescription(`I Can't Reset ${user.username}'s Nickname. \n \n Reason:- I Dont Have Permission Above Him/Her .`)
.setTimestamp();

if(!member.kickable) return message.channel.send({embeds: [nickrfail]});

const nickrdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(`Successfully Reset ${user.username}'s Nickname`)
.setTimestamp();



try {
member.setNickname(null);

message.channel.send({embeds: [nickrdone]});
} catch (error) {

message.channel.send({embeds: [nickrfail]});

  }
 }
 };
