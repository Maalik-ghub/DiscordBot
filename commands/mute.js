const discord = require("discord.js")
const client = require("../index.js")
const ms = require("ms")
require('dotenv').config();
const prefix = (process.env.PREFIX)

module.exports = {
name: "mute",
description: "mute commands",

async execute(message , args) {

const p = await client.prefix(message)

const {guild, channel} = message

                        //PERMISSION CHECKS
  if (!message.member.permissions.has("MODERATE_MEMBERS", "ADMINISTRATOR")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
  const noMutePerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **TIMEOUT_MEMBERS** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MODERATE_MEMBERS")) return message.channel.send({embeds: [noMutePerms]});

let  userOne = args[0];

let userTwo = message.mentions.users.first();

const noUserOneMute = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}mute [USER] [DURATION] [REASON] \n \neg: \n||${p}mute @Maalik#0568 10m nsfw\n${p}mute 9847927323847239 10h nsfw||`)
if (!userOne) return message.channel.send({embeds: [noUserOneMute]});


const time = args[1]

const noTimeMute = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`Specify duration of the mute`)
if (!time) return message.channel.send({embeds: [noTimeMute]});

var reason = args.slice(2).join(" ")

if (!reason) {
   reason = "Reason Was Not Provided"
 }

          //TRIGGERS IF GIVEN IS USERID
if(!userTwo) {
try {
let memberTwo = await guild.members.fetch(userOne);

if(!memberTwo) {
  const noMemberTwoMute = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription(`Member Doesn't Exists 🚫`)
  message.channel.send({embeds: [noMemberTwoMute]});
  return
};

console.log(memberTwo.user.username);

const memberTwoNotKickableMute = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`I Don't Have Permissions To Mute That User`)
if(!memberTwo.kickable) return message.channel.send({embeds: [memberTwoNotKickableMute]})


let role1 = message.guild.roles.cache.find(role => role.name === 'Muted!');
const noMuteRole = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`Mute role was not found in this server, create one by ${p}rc-mute`)
if(!role1) return message.channel.send({embeds: [noMuteRole]})

let role3 = role1.id;

const alreadyrole = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Failed :x:")
.setDescription(` ${memberTwo.user.tag} is already in mute`)

if (memberTwo.roles.cache.has(role3)) return message.channel.send({embeds: [alreadyrole]})

const mutesuccess = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${memberTwo.user.tag} was muted by ${message.author.tag} For ${time}`)
.setFields([
{name: "Reason For Mute",
value: `${reason}`,
},])

const mutefail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`:x: An error occured while muting ${memberTwo.user.username}`)

try {
await memberTwo.roles.add(role1)

message.channel.send({embeds: [mutesuccess]})
} catch(err) {
  return message.channel.send({embeds: [mutefail]})
}

const tsuccess = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(`Welcome Back ${memberTwo.user.username}`)
.setDescription(`${memberTwo.user.tag} Was Unmuted After Being Muted For ${time} by ${message.author.tag}`)

setTimeout(function(){
  let role2 = memberTwo.roles.cache.find(role => role.name === 'Muted!')
  if(!role2) return;
  memberTwo.roles.remove(role1)
  message.channel.send({embeds: [tsuccess]});
},ms(time))

} catch(err) {
  const noMember = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(" Member Doesn't Exists 🚫")
  return message.channel.send({embeds: [noMember]})
}
} else {

   /* IF MENTIONS THEN IT TRIGGERS THIS COMMAND */

   let memberOne = guild.members.cache.get(userTwo.id)

   const noPermMute = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setDescription("I Don't Have Permissions To Mute That User")
  if(!memberOne.kickable) return message.channel.send({embeds: [noPermMute]})


  let role1 = message.guild.roles.cache.find(role => role.name === 'Muted!');
  const noMuteRole = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Mute role was not found in this server create one by ${p}rc-mute`)
  if(!role1) return message.channel.send({embeds: [noMuteRole]})

  let role3 = message.guild.roles.cache.find(role => role.name === 'Muted!').id;

  const alreadyrole = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setTitle("Failed :x:")
  .setDescription(` ${memberOne.user.tag} Is Already In Mute`)

  if (memberOne.roles.cache.has(role3)) return message.channel.send({embeds: [alreadyrole]})

  const mutesuccess = new discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Done :white_check_mark:")
  .setDescription(` ${memberOne.user.tag} was muted by ${message.author.tag} for ${time}`)
  .setFields([
  {name: "Reason For Mute",
  value: `${reason}`,
  },])

  const mutefail = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`:x: An error occured while muting ${memberOne.user.username}`)

   const tsuccess = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setTitle(`Welcome Back ${memberOne.user.username}`)
  .setDescription(`${memberOne.user.tag} Was Unmuted After Being Muted For ${time} by ${message.author.tag}`)

  try {
  await memberOne.roles.add(role1);
  message.channel.send({embeds: [mutesuccess]});

    try {
  setTimeout(function(){
    let role2 = memberOne.roles.cache.find(role => role.name === 'Muted!')
    if(!role2) return;
    memberOne.roles.remove(role1)
    message.channel.send({embeds: [tsuccess]});
  },ms(time));
  } catch(err) {
      console.log(err);
  }

  } catch(err) {
    console.log(err)
    return message.channel.send({embeds: [mutefail]})
  }
}
}
};
