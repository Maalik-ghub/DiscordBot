const discord = require("discord.js")
const client = require("../index.js")

module.exports = {
name: "kick",
description: "kick commands",

async execute(message , args) {


  const {guild, channel} = message
                        //PERMISSION CHECKS
if (!message.member.permissions.has("KICK_MEMBERS")) return;
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`Please Enable **EMBED_LINKS** Pemission For Me`);
const noKickPerms = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`Please Enable **KICK_MEMBERS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("KICK_MEMBERS")) return message.channel.send({embeds: [noKickPerms]});

const userOne = args[0];

const usageEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}kick [USER] [REASON] \n \neg: \n||${p}kick @Maalik#0568 nsfw \n${p}kick 9847927323847239 nsfw||`)
if(!userOne) return message.channel.send({embeds: [usageEmbed]});

const userTwo = message.mentions.users.first()

if(!userTwo) {
try {
let memberTwo = await guild.members.fetch(userOne);

var reason = args.slice(1).join(" ")

if (!reason) {
  reason = "Reason Was Not Provided"
}

const kickfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`:x: An error occured while banning ${memberTwo.user.username}`)

if(!memberTwo.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${memberTwo.user.tag} was kicked by ${message.author.tag} `)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
])


const kickdoneDM = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`You were kicked from ${message.guild.name} by ${message.author.tag}`)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
]);


try {
await memberTwo.kick()
} catch (err) {
return message.channel.send({embeds: [kickfail]});
  }
  message.channel.send({embeds: [kickdone]});
  memberTwo.send({embeds: [kickdoneDM]})
} catch(err) {
  console.log(err)
  const noMemberOne = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Member Doesn't Exists 🚫`)
 return message.channel.send({embeds: [noMemberOne]});
}
}

const noMember = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription("Tag A Member To Kick Them")
if(!userOne) return message.channel.send({embeds: [noMember]})

const memberOne = guild.members.cache.get(userOne.id)


var reason = args.slice(1).join(" ")

if (!reason) {
  reason = "Reason Was Not Provided"
}

const kickfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`:x: An error occured while banning ${memberOne.user.username}`)

if(!memberOne.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${userOne.tag} was kicked by ${message.author.tag} `)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
])

const kickdoneDM = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`You were kicked from ${message.guild.name} by ${message.author.tag}`)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
]);

try {
await memberOne.kick()
} catch (err) {
return message.channel.send({embeds: [kickfail]});
  }
  message.channel.send({embeds: [kickdone]});
  memberOne.send({embeds: [kickdoneDM]});
 }
 };
