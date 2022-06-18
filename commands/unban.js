const discord = require("discord.js")
const client = require("../index.js")

module.exports = {
name: "unban",
description: "unBan commands",

async execute(message , args) {

  const {guild, channel} = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return;
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send("<a:AE_Failed:976848289691488316> Please Enable **EMBED_LINKS** Pemission For Me");
  const noBanPerms = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`<a:AE_Failed:976848289691488316> Please Enable **BAN_MEMBERS** Pemission For Me`)
  if (!message.channel.permissionsFor(message.client.user).has("BAN_MEMBERS")) return message.channel.send({embeds: [noBanPerms]});


const user = args[0]

const noIDGiven = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`Please Provide the ID of someone to unban them \n Usage:- \n \n '[Prefix]unban [UserID]'`)

if (!user) return message.channel.send({embeds: [noIDGiven]})

const noUsersInBan = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription("There Are No Users Banned In This Guild")

const thatUserNotInBan = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(`This User Is Not Banned or The Id Stated Is Wrong..🚫`)

message.guild.bans.fetch().then(async bans => {
  if (bans.size === 0) return message.channel.send({embeds: noUsersInBan});
  let bUser = bans.find(b => b.user.id === user);
  if (!bUser) return message.channel.send({embeds: [thatUserNotInBan]})

  const mutefail = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setTitle("Requested By:-")
  .setDescription(`${message.author.tag}`)
  .setFields([
  {name: "Failed :x:",
  value: `I Couldn't Mute User.\n The Reasons May Be The Following!`,
  },
  {name: "Reason-1",
  value: `I Dont Have Permission Above Him/Her.`,
  },
  {name: "Reason-2",
  value: `If The Server Has Two-Factor Authentication Enabled \n Then The User Who Use The Commands \n Need To Enable Two Factor Authentication \n Inorder To Use Moderation Commands`,
  },
  ],)


  try {
  await message.guild.members.unban(user)
  } catch(error) {
  return  message.channel.send({embeds: [mutefail]})
  }

  const successUnban = new discord.MessageEmbed()
  .setColor([227, 114, 237])
  .setDescription(`Successfully Unbanned User`)
  message.channel.send({embeds : [successUnban]})

})
}
};
