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
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
const noKickPerms = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`<a:AE_Failed:976848289691488316> Please Enable **KICK_MEMBERS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("KICK_MEMBERS")) return message.channel.send({embeds: [noKickPerms]});

const user = message.mentions.users.first()

const noMember = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(" Tag A Member To Kick Them")
if(!user) return message.channel.send({embeds: [noMember]})

const member = guild.members.cache.get(user.id)


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

if(!member.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${user.tag} Was Kicked By ${message.author.tag} `)
.setFields([
{name: "Reason For Kick",
value: `${reason}`,
},
])



try {
await member.kick()
} catch (err) {
return message.channel.send({embeds: [kickfail]});
  }
  message.channel.send({embeds: [kickdone]});
 }
 };
