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
.setDescription(`:x: Please Enable **ADD_REACTIONS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("ADD_REACTIONS")) return message.channel.send({embeds: [noReactionPerms]});

message.react('✅')

const user = message.member.user
const member = guild.members.cache.get(user.id)

const exampleEmbed3 = new discord.MessageEmbed()
    .setColor([227, 114, 237])
    .setTitle(`Noelle Help`)
    .setDescription(' Developed and controlled by **Maalik** ')
    .setFields([
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {
    name: 'Admin',
    value: '• prefix \n 
• rc-mute, \n 
• counting, \n 
• afk-remove',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {
    name: 'Moderation',
    value: '• clear,\n
• ban,\n
• unban,\n
• mute,\n
• unmute,\n
• kick,\n
 •warn,\n
• nickreset',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: 'Fun ',
    value: '• 8ball,\n
• roast,\n
• kill,\n
• slap,\n
• punch,\n
• hug,\n
• kiss,\n
• pat,\n
• say',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: 'Others ',
    value: '• ping,\n
• userinfo,\n
• roles,\n
• avatar,\n
• nick,\n
• afk,\n
• banner',
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
  ],)

message.author.send({embeds: [exampleEmbed3]});

}
};
