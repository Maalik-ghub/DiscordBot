const discord = require("discord.js");
const client = require("../index.js")
const { ghost } = require("../Collection/ghost.js")

module.exports = {
name: 'kill',
description: 'kill Command',


async execute(message, args){


 const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);
      const noNickPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`:x: Please Enable **MANAGE_NICKNAMES** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("MANAGE_NICKNAMES")) return message.channel.send({embeds: [noNickPerms]});

 var user = message.mentions.users.first() || message.author

const member = guild.members.cache.get(user.id);
    if(!member.kickable) return message.channel.send(`${member.user.username} is too powerful to get killed.`)


  const ghostNickname = member.nickname || member.user.username

    const data = ghost.get(member.user.id + message.guild.id);

    if(data) {
         message.channel.send(`${user} is already at peace.`);
    } else {

        ghost.set(member.user.id + message.guild.id ,[Date.now(), ghostNickname],);

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setTitle(` ${user.username} Never Dies.... :smirk: `);

if (user.bot) return message.channel.send({embeds: [botembed]})

let kill = [`**${user.username}** Was Hit By Frozen Cheese By **${message.author.username}** and Died.`,
            `**${user.username}** Be Shot And Kill By **${message.author.username}**`,
            `**${user.username}** Was Chewed Up By **${message.author.username}**`,
            `**${user.username}** Was Hugged Too Hard By **${message.author.username}** And Died`,
            `**${user.username}** Be Snowballed To Death By **${message.author.username}**`,
            `**${user.username}** Was Turned To Dust By **${message.author.username}**`,
            `**${user.username}** Drank A Love Potion From **${message.author.username}** And Died,Because Of The Toxicity In It`]

  let result = Math.floor((Math.random() * kill.length));

    const killEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setDescription(kill[result] + `, and **${user.username}** is a ghost now.`)

if(message.mentions.users.first()) {
  message.channel.send({embeds: [killEmbed]})
       ghost.set(member.user.id + message.guild.id ,[Date.now(), ghostNickname],);

} else {
    message.channel.send(`**:pensive: ┃ ${message.author} got self sabotaged and is a ghost now.**`);
       ghost.set(member.user.id + message.guild.id ,[Date.now(), ghostNickname],);
}


    if(!member.kickable) return;

    try{
        member.setNickname("👻 ┃ " + ghostNickname)
    } catch(err) {
        return;
    }

    }
}
};
