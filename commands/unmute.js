const discord = require("discord.js")
const client = require("../index.js")

const ms = require("ms")

module.exports = {
name: "unmute",
description: "unmute commands",

async execute(message , args) {

  const {guild, channel} = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.member).has("MODERATE_MEMBERS")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send("<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me");
  const noMutePerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **TIMEOUT_MEMBERS** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MODERATE_MEMBERS")) return message.channel.send({embeds: [noMutePerms]});

 const userOne = args[0]

 const userTwo = message.mentions.users.first()


if (!userTwo) {
try {

let memberTwo = await guild.members.fetch(userOne);

if(!memberTwo) {
  const noMemberTwoMute = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription(`Member Doesn't Exists 🚫`)
  message.channel.send({embeds: [noMemberTwoMute]});
  return
};

let role2 = message.guild.roles.cache.find(role => role.name === 'Muted!')


if(!role2) return message.channel.send("Looks Like The User Is Not Muted")

const unmutesuccess = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(`${memberTwo.user.tag} Was Unmuted By ${message.author.tag} :white_check_mark:`)

const mutefail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Requested By:-")
.setDescription(`${message.author.tag}`)
.setFields([
{name: "Failed :x:",
value: `I Couldn't Mute User.\n The Reasons May Be The Following!`,
},
{name: "Reason-1",
value: `I Dont Have Permission Above Him/Her.`,
},
{name: "Reason-2",
value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
},
],)

try{
await memberTwo.roles.remove(role2)
} catch(err){
  return message.channel.send({embeds: [mutefail]})
}

message.channel.send({embeds: [unmutesuccess]})
} catch(err) {
  console.log(err)
  return;
}
} else {

  let memberOne = guild.members.cache.get(userTwo.id)

  let role2 = message.guild.roles.cache.find(role => role.name === 'Muted!')

  if(!role2) return message.channel.send("Looks Like The User Is Not Muted")

  const unmutesuccess = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setTitle("Done :white_check_mark:")
  .setDescription(`${userTwo.tag} Was Unmuted By ${message.author.tag} :white_check_mark:`)

  const mutefail = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setTitle("Requested By:-")
  .setDescription(`${message.author.tag}`)
  .setFields([
  {name: "Failed :x:",
  value: `I Couldn't Mute User.\n The Reasons May Be The Following!`,
  },
  {name: "Reason-1",
  value: `I Dont Have Permission Above Him/Her.`,
  },
  {name: "Reason-2",
  value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
  },
  ],)

  try{
  await memberOne.roles.remove(role2)
  } catch(err){
    return message.channel.send({embeds: [mutefail]})
  }

  message.channel.send({embeds: [unmutesuccess]})
}
}
};
