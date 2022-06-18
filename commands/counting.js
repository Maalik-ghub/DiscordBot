const discord = require("discord.js")
const client = require("../index.js")
const { counting } = require("../Collection/counting.js")

client.on('message', async(message) => {
    try{

  if(message.author.bot) return;

      if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
      if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);
      const noDeletePerms = new discord.MessageEmbed()
      .setColor([227 ,114 ,237])
      .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **MANAGE_MESSAGES** Pemission For Me`)
      if (!message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES")) return message.channel.send({embeds: [noDeletePerms]});

let count;

let countingChannel;

const data = counting.get(message.guild.id+message.channel.id)

count = 0

if(!data) return;
 [timestamp , count, countingChannel] = data;
    console.log(count + 1)
    try {
    if (parseInt(message.content) === count + 1) {
         if(isNaN(message.content)) {
             try{
           message.delete();
             }catch(err) {
                 return;
             }
             message.channel.send(`${message.author}, please send a number.`).then(msg => {
     try{
        setTimeout(() => {
        try{
            msg.delete();
        }catch(err){
            return;
        }
        },5000)
     }catch(err){
         return;
     } 
             });
         } else {
    message.react('✅')
    count++
    counting.set(message.guild.id+countingChannel.id, [Date.now(), count, countingChannel])
    return;
    }
  }
    console.log(false)
        try{
    message.delete();
        }catch(err){
            return;
        }
    message.channel.send(`${message.author}, The next number is  **${count + 1}**`).then(msg => {
     try{
        setTimeout(() => {
        try{
            msg.delete();
        }catch(err){
            return;
        }
        },5000)
     }catch(err){
         return;
     } 
      return;
    });
  }catch(err){
        console.log(err)
        return;
    }
    }catch(err){
        return;
    }
});
