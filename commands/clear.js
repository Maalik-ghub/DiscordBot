const discord = require("discord.js");
const client = require("../index.js")

const ms = require("ms")

module.exports = {
name: 'clear',
description: 'clear Command',

async execute(message, args){

  const { guild, channel } = message

                        //PERMISSION CHECKS
if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
const noDeletePerms = new discord.MessageEmbed()
.setColor([227 ,114 ,237])
.setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_MESSAGES** Pemission For Me`)
if (!message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES")) return message.channel.send({embeds: [noDeletePerms]});


const user = message.member.user
const member = guild.members.cache.get(user.id)

 let deleteAmount;
 const noDeleteAmount = new discord.MessageEmbed()
 .setColor([227 ,114 ,237])
 .setDescription(`Specify An Amount To Delete`)
 if(!args[0]) return message.channel.send({embeds: [noDeleteAmount]})

 if (parseInt(args[0]) < 1 || parseInt(args[0]) > 100 ) {
   const noHighorLowDeleteAmount = new discord.MessageEmbed()
   .setColor([227 ,114 ,237])
   .setDescription(`Please specify a number between 1-100 to clear.`)
 return message.channel.send({embeds: [noHighorLowDeleteAmount]})

 }

 const notNumberEmbed = new discord.MessageEmbed()
 .setColor([227 ,114 ,237])
 .setDescription(` The Value Must Be A Number`)
 if(isNaN(args[0])) return message.channel.send({embeds: [notNumberEmbed]});
 deleteAmount = parseInt(args[0]);

const clearfail = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Requested By:-")
.setDescription(`${message.author.tag}`)
.setFields([
{name: "Failed :x:",
value: `I Couldn't Clear The Messages`,
},
{name: "Reason-1",
value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication Too \n Inorder To Use Moderation Commands`,
},
],)
message.delete();
setTimeout(async () => {
try {
 await message.channel.bulkDelete(deleteAmount, true)
} catch(err) {
return message.channel.send({embeds: [clearfail]})
};

 const dltembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Done :white_check_mark:")
.setDescription(`Successfully Deleted ${deleteAmount} Messages`)

  message.channel.send({embeds: [dltembed]}).then(msg => {
    setTimeout(() => {
      msg.delete();
    }, 2000)
   })
},2000)
}
}
