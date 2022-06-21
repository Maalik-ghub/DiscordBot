const discord = require("discord.js");
const client = require("../index.js")
const { mC } = require("../Collection/memberCount.js")

module.exports = {

name: 'membercount',

description: 'say Command',

async execute(message, args){


   const { guild, channel } = message

                        //PERMISSION CHECKS

  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(":x: Please Enable **EMBED_LINKS** Pemission For Me");


async function memberCount() {
    const members = await guild.members.fetch();

    const allMembers = await members.filter(m => !m.user.bot).size

    message.channel.setName(`∘˚˳°┃𝚆e𝚕𝚌o𝚖e:˚˳${allMembers}˚˳`)
    }

  let countingChannel;

  countingChannel = message.mentions.channels.first();
  const noCountingChannel = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Please mention a channel`)
  if(!countingChannel) return message.channel.send({embeds: [noCountingChannel]})

  let checking = true;

    const data = mC.get(message.guild.id);


    if(args[0] === `enable`) {

        if(data) {

    clearTimeout(memberCount)

    message.channel.send("`✅ Disabled the previos member count.`")

    mC.delete(message.guild.id)

    }
       setInterval(memberCount,20000)
        message.channel.send(`**:white_check_mark: ┃ Enabled member count in ${message.channel}** `)

     mC.set(message.guild.id, [Date.now(), checking])
        }

    if (args[0] === `disable`) {
        if(!data) return message.channel.send(":x: ┃ Member count isn't enabled")
        clearInterval(memberCount)
        message.channel.send(`**:white_check_mark: ┃ Disabled member count in ${message.channel}**`)

mC.delete(message.guild.id)
    }

return;
}};
