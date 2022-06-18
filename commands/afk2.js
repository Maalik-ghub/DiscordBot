const discord = require("discord.js")
const client = require("../index.js")
const { afk } = require('../Collection/afk3.js');
const moment = require("moment")

client.on("message", async(message) => {

   const { guild, channel } = message

  if(!message.guild || message.author.bot) return;

  const user = message.member.user

  const member = guild.members.cache.get(user.id)

  const mentionedMember = message.mentions.members.first();
  if(mentionedMember) {
    const data = afk.get(mentionedMember.id + message.guild.id);

    if(data) {
      const [ timestamp, reason, afkNickname ] = data;
      const timeAgo = moment(timestamp).fromNow();

      const afkembed = new discord.MessageEmbed()
      .setColor([227, 114, 237])
      .setDescription(` ${mentionedMember} is currently **AFK** (${timeAgo}) \n with the status \n \n **${reason}**`)

      return message.channel.send({ embeds: [afkembed]}).then(msg => {
          setTimeout(() => {
              msg.delete()
          }, 5000)
      })

    }
  }
  const afkembed = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`${message.member}, your afk have been removed.`)

  const getData = afk.get(message.author.id + message.guild.id);




  if (getData) {
      const [ timestamp, reason, afkNickname ] = getData;
        afk.delete(message.author.id + message.guild.id);
message.channel.send({embeds : [afkembed]}).then( msg => {
        setTimeout(() => {
            msg.delete()
        }, 5000)
    })
     if(!member.kickable) return;
member.setNickname(afkNickname)


}
})
