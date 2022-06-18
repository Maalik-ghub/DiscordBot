const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'help',
description: 'help Command',


async execute(message, args){

  const {guild, channel} = message

                //PERMISSIONS CHECK
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
const noReactionPerms = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`<a:AE_Failed:976848289691488316> Please Enable **ADD_REACTIONS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("ADD_REACTIONS")) return message.channel.send({embeds: [noReactionPerms]});

message.react('<a:AE_Done:976848494205759508>')

const user = message.member.user
const member = guild.members.cache.get(user.id) 

const exampleEmbed3 = new discord.MessageEmbed()
    .setColor([227, 114, 237])
    .setTitle('<:AE_Crown:974328230813261914> Malika Help')
    .setDescription(' Developed and controlled by **Malik** <:AE_BotDeveloper:974335417241440256>')
    .setFields([
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {
    name: '<a:AE_Loading:974339916089688084>  Admin',
    value: '<a:AE_PinkArrow:974334008391512104> prefix, rc-mute',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {
    name: '<a:AE_Loading:974339916089688084>  Moderation',
    value: '<a:AE_PinkArrow:974334008391512104> clear ,ban ,unban ,mute ,unmute ,kick , warn, nickreset.',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: '<a:AE_Loading:974339916089688084>  Fun ',
    value: '<a:AE_PinkArrow:974334008391512104> 8ball ,roast ,kill ,slap ,punch ,hug ,kiss ,pat ,say.',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: '<a:AE_Loading:974339916089688084>  Others ',
    value: '<a:AE_PinkArrow:974334008391512104> ping ,hey ,userinfo,roles ,avatar ,nick , afk, banner.',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
  ],)

message.author.send({embeds: [exampleEmbed3]});

}
};
