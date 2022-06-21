const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'roles',
description: 'userinfo Command',


async execute (message, args){

  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

   const { guild, channel } = message

   let rolemap = message.guild.roles.cache
   .sort((a, b) => b.position - a.position)
   .map(r => r)
   .join(" ,\n ");

   if (rolemap.length > 1024) rolemap = "Too many roles to display";
   if (!rolemap) rolemap = "No roles";

   const rolesEmbed = new discord.MessageEmbed()
   .setColor("RED")
   .setAuthor(`All Roles in ${message.guild.name}`)
   .setDescription(rolemap);
   message.channel.send({embeds: [rolesEmbed]})
 }
};
