const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'say',
description: 'say Command',


async execute(message, args){

   const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send("<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me");
  const noDeletePerms = new discord.MessageEmbed()
  .setColor([227 ,114 ,237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_MESSAGES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES")) return message.channel.send({embeds: [noDeletePerms]});
   message.delete();

  var user = args[0];
  const noMessage = new discord.MessageEmbed()
  .setColor([227 ,114 ,237])
  .setDescription(`\n Pls Mention The Message. \n \n Usage:- \n \n '[prefix]say [message]`)
  if (!user)  return message.channel.send({embeds: [noMessage]});

  var messageGiven = args.slice(0).join(" ");

   message.channel.send(`${messageGiven}`)
}};
