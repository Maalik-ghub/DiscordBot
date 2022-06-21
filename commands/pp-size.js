const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'pp-size',
description: 'kill Command',


async execute(message, args){

 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

 var user = message.mentions.users.first()

 if (!user){
 var user = message.member.user
 }

const member = guild.members.cache.get(user.id)

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(` ${user.username} Never Dies.... :smirk: `);

if (user.bot) return message.channel.send({embeds: [botembed]})

let kill = ['8=D',
            '8==D',
            '8===D',
            '8====D',
            '8=====D',
            '8======D',
            '8=======D',
            '8========D',
            '8=========D',
            '8==========D']

  let result = Math.floor((Math.random() * kill.length));

    const killEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setTitle(`PP-size of ${member.user.username}`)
   .setDescription(kill[result])


  message.channel.send({embeds: [killEmbed]})
}
};
