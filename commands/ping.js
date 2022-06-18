const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'ping',
description: 'Ping Command',

async execute(message, args, client){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me`);


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
name: "Bot Latency <:AE_BotDeveloper:974335417241440256> ",
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
