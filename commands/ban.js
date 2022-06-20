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
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);
const noBanPerms = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`:x: Please Enable **BAN_MEMBERS** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("BAN_MEMBERS")) return message.channel.send({embeds: [noBanPerms]});

const {guild, channel} = message

const userOne = args[0];

const userTwo = message.mentions.users.first()

const usageEmbed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}ban [USER] [REASON] \n \neg: \n||${p}ban @Maalik#0568 nsfw \n${p}ban 9847927323847239 nsfw||`)
if(!userOne) return message.channel.send({embeds: [usageEmbed]});

var reason = args.slice(1).join(" ")

if (!reason) {
   reason = "Reason Was Not Provided"
 }


               //TRIGGERS IF GIVEN IS USERID
 if(!userTwo) {
 try {
 let memberTwo = await guild.members.fetch(userOne);

 const higherRole = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription(`You can't ban ${memberTwo.user.username}`)
if(memberTwo.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({embeds: [higherRole]});

const kickfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`:x: An error occured while banning ${memberTwo.user.username}`)

if(!memberTwo.kickable) return message.channel.send({embeds: [kickfail]});

const kickdone = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(` ${memberTwo.user.tag} was banned by ${message.author.tag} `)
.setFields([
{name: "Reason For Ban",
value: `${reason}`,
},
]);

const kickdoneDM = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`You were banned from ${message.guild.name} by ${message.author.tag}`)
.setFields([
{name: "Reason For Ban",
value: `${reason}`,
},
]);

try {
await memberTwo.send({embeds: [kickdoneDM]});
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

  const higherRole = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`You can't ban ${memberOne.user.username}`)
 if(memberOne.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({embeds: [higherRole]});

 const kickfail = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription(`:x: An error occured while banning ${memberOne.user.username}`)

 const kickdone = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setTitle("Done :white_check_mark:")
 .setDescription(` ${userTwo.tag} was banned by ${message.author.tag} `)
 .setFields([
 {name: "Reason For Ban",
 value: `${reason}`,
 },
 ])

 const kickdoneDM = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription(`You were banned from ${message.guild.name} by ${message.author.tag}`)
 .setFields([
 {name: "Reason For Ban",
 value: `${reason}`,
 },
 ]);


 try {
 await memberOne.send({embeds: [kickdoneDM]})
 await memberOne.ban();
 } catch (err) {
 return message.channel.send({embeds: [kickfail]});
 }
 message.channel.send({embeds: [kickdone]});
}
}
};
