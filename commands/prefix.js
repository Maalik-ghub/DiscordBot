const discord = require("discord.js");
const client = require("../index.js")
const prefixSchema = require("../Models/prefix");
const { Message } = require("discord.js");

module.exports = {
name: 'prefix',
description: '8ball Command',
/**
* @param {Message} message
*/

async execute (message , args) {

   if (!message.member.permissions.has("ADMINISTRATOR")) return;

 const { guild, channel } = message

const noPrefix = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription("please specify a **Prefix**.")
 if(!args[0]) return message.channel.send({ embeds : [noPrefix]});

 const highLength = new discord.MessageEmbed()
 .setColor([227, 114, 237])
 .setDescription("please provide a **Prefix** with less than **3** characters.")
 if(args[0].length > 3) return message.channel.send({embeds : [highLength]});

 const givenPrefix = args.slice(0).join(" ");

prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
   if(err) throw err;
   if(data) {
     await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
     data = new prefixSchema({
       Guild : message.guild.id,
       Prefix : givenPrefix
      })
      data.save();
      const updatedPrefix = new discord.MessageEmbed()
      .setColor([227, 114, 237])
      .setDescription(` Your **Prefix** has been updated to **${givenPrefix}**.`)
      message.channel.send({embeds : [updatedPrefix]});
   } else {
     data = new prefixSchema({
       Guild : message.guild.id,
       Prefix : givenPrefix
     })
     data.save();
     const savedNewPrefix = new discord.MessageEmbed()
     .setColor([227, 114, 237])
     .setDescription(` Your **Prefix** has been set to **${givenPrefix}**.`)
     message.channel.send({embeds : [savedNewPrefix]});
   }
 })
 }
};
