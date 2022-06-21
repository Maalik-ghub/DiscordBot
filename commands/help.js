const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'help',
description: 'help Command',


async execute(message, args){

  const {guild, channel} = message

                //PERMISSIONS CHECK
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);
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
    value: "•** prefix - **changes or sets a prefix for the bot in the server. \n•** rc-mute - **creates a mute role for the server. \n•** counting - **enable or disable counting in specified channel. \n•** afk-remove - **removes someone's inappropriate afk.",
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {
    name: 'Moderation',
    value: "**• clear - **deletes messages as a bulk.\n•** ban - **bans a member from the server.\n•** unban - **unbans a member from this server.\n•** mute - **mutes a member in the server for a specified time.\n•** unmute - **unmutes a members in the server.\n•** kick - **kicks a member from the server.\n•** warn - **warns a member in dms.\n•** nick - **changes nickname of a member \n•** nickreset - **resets inappropriate nicknames of a member.",
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: 'Fun ',
    value: "•** 8ball - **answers your questions.\n•** roast - **roasts someone to bones for you. \n•** kill - **kill and make someone a ghost. \n•** slap - **slap someone. \n•** punch - **punch someone.\n•** hug - **hug someone.\n•** kiss - **kiss someone\n•** pat - **pats someone.\n•** blush - **makes you blush.\n•** gayrate - **shows how gay is someone.\n•** ship - **find someone's chances with someone else.\n•** say - **make the bot say something.",
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
    {name: 'Others ',
    value: "•** ping - **returns ping of the bot\n•** userinfo - **shows info and roles of a user,\n•** roles - **shows all roles in the server.\n•** avatar - **show's someone's avatar in high quality \n•** afk - **go afk.\n•** banner - **shows someone's banner in high quality.",
    },
    {name: '\u200b',
    value: '\u200b',
    inline: false,
    },
  ],)

message.author.send({embeds: [exampleEmbed3]});

}
};
