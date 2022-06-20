const discord = require("discord.js");
const client = require("../index.js")
const { afk } = require("../Collection/afk3.js")

module.exports = {
name: 'afk',
description: '8ball Command',

async execute (message , args) {

const p = await client.prefix(message)

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
  const noNickPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Please Enable **MANAGE_NICKNAMES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_NICKNAMES")) return message.channel.send({embeds: [noNickPerms]});

const helpEmbed = new discord.MessageEmbed()
.setColor([227, 114 ,237])
.setDescription(`${p}afk [REASON] \n \n'eg: ${p} I'll be right back'`)
if(!args[0]) return message.channel.send({embeds: [helpEmbed]})

  const reason = args.join(" ") || "AFK";

  const user = message.author;

  const member = guild.members.cache.get(user.id)

  const afkNickname = member.nickname || member.user.username

  afk.set(message.author.id + message.guild.id ,[Date.now(), reason, afkNickname],);

  const afkembed = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`You are now **AFK** in ${message.guild.name} with the status \n \n **${reason}**`)

  message.channel.send({embeds : [afkembed]})

    if(!member.kickable) return;

    if (member.nickname) {
        try{
        member.setNickname("[AFK]" + afkNickname);
        } catch(err) {
           console.log(err)
        }
    } else {
        try{
    member.setNickname("[AFK]" + afkNickname)
        }catch(err){
            console.log(err)
        }
    };
}
}
