const discord = require("discord.js");
const client = require("../index.js")
const { counting } = require("../Collection/counting.js")

module.exports = {
name: 'counting',
description: '8ball Command',

async execute (message , args) {

    const p = await client.prefix(message)

   if(!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
   if (!message.member.permissions.has("ADMINISTRATOR")) return;

   const usageEmbed = new discord.MessageEmbed()
   .setColor([227, 114 ,237])
   .setDescription(`${p}counting [ENABLE | DISABLE] [CHANNEL] [AMOUNT**(Optional)**] \n \neg: \n${p}counting enable #counting \n${p}counting enable #counting 10 \n${p}counting disable #counting`)
   if(!args[0]) return message.channel.send({embeds: [usageEmbed]})

let count;
   if(args[0] === `enable`){
        let countingChannel;

        countingChannel = message.mentions.channels.first();
        if(!countingChannel) return message.channel.send("mention the countingChannel")

        const data = counting.get(message.guild.id+countingChannel);
        if(data){
          [timestamp, count, countingChannel] = data;
             message.channel.send(`The counting channel already exists. \n Please remove it with the command: \n ${p}counting remove-channel ${countingChannel}. \n`);
             return;
        } else {
            let count = parseInt(args[2]);
          counting.set(message.guild.id+countingChannel, [Date.now(), count, countingChannel]);
          message.channel.send(`Enabled counting in ${countingChannel}`)
        }
   }
      if(args[0] === `disable`){

    countingChannel = message.mentions.channels.first();
    const data = counting.get(message.guild.id+countingChannel)

        if(!countingChannel) return message.channel.send("mention the countingChannel")
        if(data){
             counting.delete(message.guild.id+countingChannel)
        } else {
          message.channel.send("The given channel is not a counting channel");
        }
      }
 }
}
