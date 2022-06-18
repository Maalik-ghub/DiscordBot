const client = require("../index.js")

let animEmpireChannel = client.channels.cache.get('985167902468608050');
let animEmpire = client.guilds.cache.get('985151973982609418');
let customRoles = client.channels.cache.get('985174910395629568');

if(!animEmpire) return;
client.on("guildMemberUpdate",(oldMember, newMember) =>{

const oldStatus = oldMember.premiumSince;
const newStatus = newMember.premiumSince;

if(!oldStatus && newStatus) {

const newEmbed = new discord.MessageEmbed()
.setColor([245, 5, 229])
.setTitle(`<a:AE_Boosting:985093809543208991> ${newMember.username} Just Boosted ${animEmpire.name} <a:AE_Boosting:985093809543208991>`)
.setDescription(`               Thankyou **${newMember.username}**, For Boosting The Server
  \n \n<a:AE_Booster:985093556937056266> You Can Now Open A Ticket In ${customRoles} To Claim Your Custom Role.`)

client.channels.cache.get('940208851649724426').send({embeds: [newEmbed]})
}

if(!oldStatus && newStatus) {

const newEmbed2 = new discord.MessageEmbed()
.setColor([245, 5, 229])
.setDescription(`<a:AE_Boosting:985093809543208991> ${newMember.username} Just Unboosted ${animEmpire.name} or Their Boost Ended <a:AE_Boosting:985093809543208991>`);

client.channels.cache.get('940208851649724426').send({embeds : [newEmbed2]})
}

});