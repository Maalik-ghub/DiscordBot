const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'userinfo',
description: 'userinfo Command',


async execute(message, args){

   const { guild, channel } = message

                        //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(":x: Please Enable **EMBED_LINKS** Pemission For Me");


 var user = message.mentions.users.first();

    if(!user) {
        try {
        var user = args[0];

        if(!user) return message.channel.send("Please Provide UserID or UserMention");

        const member = await guild.members.fetch(user)

        let rolemap = member.roles.cache
.sort((a, b) => b.position - a.position)
.map(r => r)
.join(" ,\n ");

if (rolemap.length > 1024) rolemap = "Too many roles to display";
if (!rolemap) rolemap = "No roles";

const selfEmbed = new discord.MessageEmbed()
.setColor("RED")
.setAuthor(`User Info Of ${user.username}`, member.user.displayAvatarURL())
.setFields(
{name:"User Tag",
value: member.user.tag,
inline: true,
},
{name:"User Id",
value: member.user.id,
inline: true,
},
{name: "Nickname",
value: member.user.nickname || 'None',
inline: false,
},
{name: "Roles",
value: rolemap,
inline: false,
},
)
.setTimestamp();


 message.channel.send({embeds: [selfEmbed]});
            return;
        }catch(err){
            console.log(err)
            message.channel.send("The given user doesn't exists");
            return;
}
    };

const member = guild.members.cache.get(user.id)

let rolemap = member.roles.cache
.sort((a, b) => b.position - a.position)
.map(r => r)
.join(" ,\n ");

if (rolemap.length > 1024) rolemap = "Too many roles to display";
if (!rolemap) rolemap = "No roles";

const selfEmbed = new discord.MessageEmbed()
.setColor("RED")
.setAuthor(`User Info Of ${user.username}`, user.displayAvatarURL())
.setFields(
{name:"User Tag",
value: user.tag,
inline: true,
},
{name:"User Id",
value: user.id,
inline: true,
},
{name: "Nickname",
value: member.nickname || 'None',
inline: false,
},
{name: "Roles",
value: rolemap,
inline: false,
},
)
.setTimestamp();


 message.channel.send({embeds: [selfEmbed]});
 }
 };
