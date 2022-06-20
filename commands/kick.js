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
.setTitle("Requested By:-")
.setDescription(`${message.author.tag}`)
.setFields([
{name: "Failed :x:",
value: `I Couldn't Kick User.\n The Reasons May Be The Following!`,
},
{name: "Reason-1",
value: `I Dont Have Permission Above Him/Her.`,
},
{name: "Reason-2",
value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
},
],)

if(!memberTwo.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${memberTwo.user.tag} Was Kicked By ${message.author.tag} `)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
])


try {
await memberTwo.kick()
} catch (err) {
return message.channel.send({embeds: [kickfail]});
  }
  message.channel.send({embeds: [kickdone]});
  return;
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
.setTitle("Requested By:-")
.setDescription(`${message.author.tag}`)
.setFields([
{name: "Failed :x:",
value: `I Couldn't Kick User.\n The Reasons May Be The Following!`,
},
{name: "Reason-1",
value: `I Dont Have Permission Above Him/Her.`,
},
{name: "Reason-2",
value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
},
],)

if(!memberOne.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${userOne.tag} Was Kicked By ${message.author.tag} `)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
])


try {
await memberOne.kick()
} catch (err) {
return message.channel.send({embeds: [kickfail]});
  }
  message.channel.send({embeds: [kickdone]});
 }
 };
