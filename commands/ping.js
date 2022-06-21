const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'ping',
description: 'Ping Command',

async execute(message, args, client){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);


message.channel.send("` Searching For Ping...... `:mag:").then((resultMessage) => {

setTimeout(() => {
 resultMessage.delete();
}, 2000)

const latency = resultMessage.createdTimestamp - message.createdTimestamp

const ping = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle("Pong :ping_pong: ")
.setDescription("**.............**")
.setFields([{
name: "Bot Latency ",
value: `${latency}ms`
},
{
name: "API Latency",
value: `${client.ws.ping}ms`
},
],)
.setTimestamp();
message.delete();
message.channel.send({embeds: [ping]})

})
}
}
