const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: '8ball' || '8',
description: '8ball Command',

async execute (message , args) {

const p = await client.prefix(message)

const { guild, channel } = message

                        //PERMISSION CHECKS
if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(` Please Enable **EMBED_LINKS** Pemission For Me`);

const roast = ([`Yes <a:AE_Done:976848494205759508>.`,
                  `No <a:AE_Failed:976848289691488316>.`,
                  `I don't think so.`,
                  `Did you really aksed that? No,for sure.`,
                `Maybe...`,
              `Yeah For Sure...`, ]);

const result = Math.floor((Math.random() * roast.length));

const dumb = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`${p}8ball [QUESTION] \n \n'eg: ${p}8ball am i a good bot?'`)

const ball = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(roast[result])


  if(!args[1]) return message.channel.send({embeds: [dumb]});


  message.channel.send({embeds: [ball]})

}
};
