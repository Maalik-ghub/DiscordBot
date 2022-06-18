const discord = require("discord.js");
const client = require("../index.js")
const { ghost } = require("../Collection/ghost.js")

module.exports = {
name: 'revive',
description: 'kill Command',


async execute(message, args){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
      const noNickPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_NICKNAMES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_NICKNAMES")) return message.channel.send({embeds: [noNickPerms]});

 var user = message.mentions.users.first() || message.channel.send("**:x: ┃ Mention the member you wanna revive.**")
 if(!message.mentions.users.first()) return;

const member = guild.members.cache.get(user.id)

if(!member.kickable) return message.channel.send(`**:x: ┃ ${member.user.username} is too powerful and don't need help.**`)



const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(` Bots are never dead...`);




if (user.bot) return message.channel.send({embeds: [botembed]})

    if(!member.kickable) return;

    const data = ghost.get(member.user.id + message.guild.id);
    if (data) {
        const [ timestamp, ghostNickname ] = data;
    try{
      if(member.user.id === message.author.id) return message.channel.send("You Can't Revive Yourself");
       ghost.delete(member + message.guild.id);
        member.setNickname(ghostNickname);
        message.channel.send(`:white_check_mark:  ┃ ${message.author.username} Revived ${member.user.username}`)
    } catch(err) {
        return;
    }
        } else {
            message.channel.
send("The member is not dead")
}
}
    }
