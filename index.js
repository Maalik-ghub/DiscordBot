const discord = require("discord.js");
const ws = require("ws");
const fs = require("fs");
const ms = require("ms");
const path = require("node:path")
require('dotenv').config();
const prefix = (process.env.PREFIX);

//Client  Part
const { MessageAttachment, MessageEmbed } = require('discord.js');
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"]});
module.exports = client;
//Mongoose Part
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://malika:cockingnabeel1@cluster1.v8nsp.mongodb.net/Data',{
  useUnifiedTopology : true,
  useNewUrlParser : true,
}).then(console.log('connected to mongo db!'));
/**
* @param {Client} client
*/

//Custom Prefix Part
const prefixSchema = require("./Models/prefix");
client.prefix = async function(message){
let custom;
if(!message.guild) return;
const data = await prefixSchema.findOne({ Guild : message.guild.id })
if(data) {
  custom = data.Prefix;
} else {
  custom = prefix;
} return custom;
}

//Client At Ready
client.on("ready" , () => {
console.log(`I Have Logged In As ${client.user.username}`);
 setInterval(() => {
     client.user.setActivity(`n!help`)
 },10000)
});

//Event Handler
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Prefix Set Part
client.on("message", async message => {

//REPLY PREFIX ON MENTION
  const p = await client.prefix(message);
  if(message.mentions.has(client.user.id)) {
    if(message.author.bot) return false;
    if(!message.content.startsWith(p)) return;
    const argsw = message.content.split(/ /g);
    if(argsw[1]) return;
    if(!message.content.startsWith(message.mentions.users.first())) return;
    if(message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

      if(message.mentions.has(client.user.id))
      return message.channel.send(`|| Malika's   **Prefix**   in  __${message.guild.name}__   is   "**${p}**" ||`);
  }
   if (!message.content.startsWith(p) || message.author.bot) return;
   const args = message.content.slice(p.length).split(/ +/g);
   const command = args.shift().toLowerCase();
   if (!client.commands.has(command)) return;
   try {
   client.commands.get(command).execute(message, args, client);
   } catch (err) {
  console.log(error);
  }
});

client.login(process.env.TOKEN)
