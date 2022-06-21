const discord = require("discord.js");
const client = require("../index.js")
const { gay } = require("../Collection/gayrate.js")

module.exports = {

name: 'gayrate',

description: '8ball Command',

async execute (message , args) {
const { guild, channel } = message

                        //PERMISSION CHECKS

if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;

if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

const user = message.mentions.users.first() || message.author;

        member = guild.members.cache.get(user.id);

   const data = gay.get(member.user.id + message.guild.id)

   let random;



   if(!data){
 random = Math.floor((Math.random() * 99)+1);
       } else if(member.user.id === 900067059369672754) {
           random = 1;
           }
    else {
        [ timestamp, random ] = data
        }



   let gayMessage;
    let image;
   if(random >= 80) {
       gayMessage = `**${user.username}** is gay af *confirmed*`

       image = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/640px-Gay_Pride_Flag.svg.png`

       }else if(random >=50) {
           gayMessage = `**${user.username}** is pretty gay`

           image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoqiFcBUFYMO6wSfMInZiJNuDP0EQdV-BUQ&usqp=CAU`

           }else if(random >= 30){
               gayMessage = `Hmm.., not sure but **${user.username}** could be gay`
               image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91Mql5UicnymWDTPEkAvZ0ABBTBdioSBOVw&usqp=CAU`

               }else {
                   gayMessage = `**${user.username}** is straight as the pole that **${user.username}'s** mom dances on`
                   image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6d_c_XZxrwKWcfbHlb_3hpeuEOfo8IpR2m1U7Gj8x-6wV_6nPuGmCtc&s=10`
                   }

const ball = new discord.MessageEmbed()

.setColor([227, 114, 237])
.setTitle(`${gayMessage}(${random}%)`)
.setImage(image)


  message.channel.send({embeds: [ball]})


    gay.set(member.user.id + message.guild.id, [Date.now(), random],)

}

};
