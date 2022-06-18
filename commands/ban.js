const discord = require("discord.js")
const client = require("../index")

module.exports = {
name: "ban",
description: "Ban commands",

async execute(message , args) {

const p = await client.prefix(message)

                        //PERMISSION CHECKS
if (!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return;
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
const noBanPerms = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`<a:AE_Failed:976848289691488316> Please Enable **BAN_MEMBERS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("BAN_MEMBERS")) return message.channel.send({embeds: [noBanPerms]});

const {guild, channel} = message

const userOne = args[0];

const userTwo = message.mentions.users.first()

const usageEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`**This Command Bans A Member From This Server** <a:AE_Ban:977158440730382376>. \n \n Usage:- \n ${p}ban [**UserID** || **UserMention**]`)
if(!userOne) return message.channel.send({embeds: [usageEmbed]});

var reason = args.slice(1).join(" ")

if (!reason) {
   reason = "Reason Was Not Provided"
 }


               //TRIGGERS IF GIVEN IS USERID
 if(!userTwo) {
 try {
 let memberTwo = await guild.members.fetch(userOne);
     
      if(memberTwo.user.roles.highest.position > message.member.roles.highest.position) return message.channel.send("<a:AE_Failed:976848289691488316> ┃** You can't warn that user.**"); 

const kickfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Requested By:-")
.setDescription(`${message.author.tag}`)
.setFields([
{name: "Failed :x:",
value: `I Couldn't Ban Member.\n The Reasons May Be The Following!`,
},
{name: "Reason-1",
value: `I Dont Have Permission Above Him/Her.`,
},
{name: "Reason-2",
value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
},
],);

if(!memberTwo.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${memberTwo.user.tag} Was Banned By ${message.author.tag} `)
.setFields([
{name: "Reason For Ban",
value: `${reason}`,
},
]);

try {
await memberTwo.ban();

} catch (err) {
  console.log(err)
return message.channel.send({embeds: [kickfail]});
}

message.channel.send({embeds: [kickdone]});

} catch(err) {
  const noMemberOne = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Member Doesn't Exists 🚫`)
 return message.channel.send({embeds: [noMemberOne]});
}
} else {
               //TRIGGERS IF GIVEN IS USER MENTION

  let memberOne = guild.members.cache.get(userTwo.id)

 if(memberOne.roles.highest.position > message.member.roles.highest.position) return message.channel.send("<a:AE_Failed:976848289691488316> ┃** You can't warn that user.**"); 
  
 const kickfail = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setTitle("Requested By:-")
 .setDescription(`${message.author.tag}`)
 .setFields([
 {name: "Failed :x:",
 value: `I Couldn't Ban Member.\n The Reasons May Be The Following!`,
 },
 {name: "Reason-1",
 value: `I Dont Have Permission Above Him/Her.`,
 },
 {name: "Reason-2",
 value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
 },
 ],)
 .setTimestamp();

 const kickdone = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setTitle("Done :white_check_mark:")
 .setDescription(` ${userTwo.tag} Was Banned By ${message.author.tag} `)
 .setFields([
 {name: "Reason For Ban",
 value: `${reason}`,
 },
 ])

 try {
 await memberOne.ban();
 } catch (err) {
 return message.channel.send({embeds: [kickfail]});
 }

 message.channel.send({embeds: [kickdone]});
}
}
};
