const discord = require("discord.js");
const client = require("../index.js")

module.exports = {
name: 'roast',
description: 'roast Command',

async execute (message , args) {

   const { guild, channel } = message

                      //PERMISSION CHECKS
  if (!message.channel.permissionsFor(message.client.user).has("SEND_MESSAGES")) return;
  if (!message.channel.permissionsFor(message.client.user).has("EMBED_LINKS")) return message.channel.send(`:x: Please Enable **EMBED_LINKS** Pemission For Me`);

   var user = message.mentions.users.first()

   if (!user) {
     var user = message.member.user
   }

  const member = guild.members.cache.get(user.id)

const botembed = new discord.MessageEmbed()
.setColor([227, 114, 237])
.setDescription(` You Really Thought I Would Roast My Kind, \n Didn't You?. \n ${message.author.username}, You Are A Dumbass! :smirk:`)


if (user.bot) return message.channel.send({embeds: [botembed]})
let roast = ([`**${user.username}**, you think loading a dishwasher means \n getting your wife drunk.`,
             `**${user.username}**, if ignorance is bliss, \n you must be the happiest person alive.`,
             `**${user.username}**, people like you are the reason \n I am on medication.`,
             `**${user.username}**, we all spring from apes, \n but you didn't spring far enough.`,
             `**${user.username}**, your mind is on vacation \n but your mouth works overtime.`,
             `**${user.username}**, you are so ugly \n they could scare the chrome off a bumper.`,
             `**${user.username}**, you are as useless as \n a screen door on a submarine.`,
             `**${user.username}**, if brains were dynamite, \n you would not have enough to blow your nose.`,
             `**${user.username}**, you realise makeup \n is not going to fix your stupidity?.`,
             `**${user.username}**, I do not actually hate you, \n  but if you were on fire and I had water, \n I had drink it.`,
             `**${user.username}**, it's better to let someone think \n you are an idiot \n than to open your mouth and prove it.`,
             `**${user.username}**, you will never be the man your mother is.`,
             `**${user.username}**, you stare at frozen juice cans \n because they say "concentrate".`,
             `**${user.username}**, looks like you traded your neck \n for an extra chin.`,
             `**${user.username}**, if I want your opinion, \n I will give it to you.`,
             `**${user.username}**, ordinarily people live and learn. \n You just live.`,
             `**${user.username}**, if you spoke your mind,\n you had be speechless.`,
             `**${user.username}**, shock me, \n say something intelligent.`,
             `**${user.username}**, I heard you got a brain transplant \n and the brain rejected you.`,
             `**${user.username}**, learn from your parent's mistakes, use birth control.`,
             `**${user.username}**, earth is full. Go home.`,
             `**${user.username}**, you act as though your stupidity is a virtue.`,
             `**${user.username}**, you may look like an idiot \n and talk like an idiot but don't let that fool you. \n You really are an idiot.`,
             `**${user.username}**, if you were any more stupid, \n you had have to be watered twice a week.`,
             `**${user.username}**, are you the first \n in your family born with a tail?.`,
             `**${user.username}**, your village just called. \n They are missing an idiot.`,
             `**${user.username}**, your friends hate you. \n Just kidding, \n you don't have any friends.`,
             `**${user.username}**, somewhere out there is a tree,\n tirelessly producing oxygen\n so you can breathe.\nI think you owe it an apology.`,
             `**${user.username}**, you are about as interesting \n as watching paint dry.`,
             `**${user.username}**, it's time to pull over \n and change the air in your head.`,
             `**${user.username}**, I wish we were better strangers.`,
             `**${user.username}**, why don't you do us all a favour;\n pull your lip over your head and swallow.`,
             `**${user.username}**, did your parents ever ask \n you to runaway from home?`,
             `**${user.username}**, if I were a dog \n and you were a flower \n i had lift up my leg \n and give you a shower.`,
             `**${user.username}**, your family wasn't dysfunctional until you arrived.`,
             `**${user.username}**, you are a couple of sandwiches short of picnic.`,
             `**${user.username}**, you are the kind of human \n that you would use a blueprint \n to build an idiot.`,
             `**${user.username}**, let's play horse.\n I will be the front end\n and you be yourself.`,
             `**${user.username}**, you have got more wrinkles \n than an elephant's scrotum.`,
             `**${user.username}**, you are so dense \n that light bends around you.`,
             `**${user.username}**, you have got more talent \n in your little finger \n than your big finger`,
             `**${user.username}**, I do not know what makes you \n screw up, but whatever it is, \n it works.`,
             `**${user.username}**, there was something about you \n that i liked, but you spend it.`,
             `**${user.username}**, the trouble with you \n is that you lack the power of conversation \n but not the power of speech.`,
             `**${user.username}**, is that your nose, \n or did a bus park on your face.`,
             `**${user.username}**, I could remove 90% \n of your beauty with wet Kleenex.`,
             `**${user.username}**, you must have a low opinion of people if you think they are equals.`,
             `**${user.username}**, why don't you go play in traffic?`,
             `**${user.username}**, if I've said anything to offend you, \n I mean it.`,
             `**${user.username}**, you look like a professional blind date.`,
             `**${user.username}**, let me guess: \n your parents didn't hug you enough as a kid.`,
             `**${user.username}**, some people bring happiness wherever they go; \n you bring happiness whenever you go.`,
             `**${user.username}**, I can feel my personality \n turning a dull shade of gray \n when i talk to you.`,
             `**${user.username}**, Please keep on talking \n someday you will say something intelligent.`,
             `**${user.username}**, You are as confused \n as a hungry baby in a topless bar.`,
             `**${user.username}**, Close your mouth! \n Crap is falling out of it.`,
             `**${user.username}**, I had slap you, but that would be animal abuse.`,
             `**${user.username}**, I heard the only place you are ever invited is outside.`,
             `**${user.username}**, You are the living proof that evolution can go in reverse.`,
             `**${user.username}**, take this quarter, go downtown and have a dog eat that thing off your face!`,
             `**${user.username}**, don't think too much, it may sprain your brain.`,
             `**${user.username}**, I would take you to an eating competition, but it looks like you already won. Twice.`,
             `**${user.username}**, you fear success, but really have nothing to worry about.`,
             `**${user.username}**, so you've changed your mind? Does this one work any better?`,
             `**${user.username}**, someday you'll find yourself, and you'll be disappointed.`,
             `**${user.username}**, thank you; we're all challenged by your unique point of view.`,
             `**${user.username}**, I'd like to see things from your POV. Unfortunately I can't shove my head that far up my arse.`,
             `**${user.username}**, Is that your face or did your neck throw up?`,
             `**${user.username}**, how about never? Is never good for you?`,
             `**${user.username}**, anyone who told you to be yourself couldn't have given you worse advice.`,
             `**${user.username}**, there are several people in this world that i find obnoxious and you are all of them.`,
             `**${user.username}**, if I wanted someone like you for a friend, I'd buy a dog.`,
             `**${user.username}**, your elevator doesn't go all the way to the top.`,
             `**${user.username}**, I will always cherish the initial misconception I had about you.`,
             `**${user.username}**, if I had a face like yours i had sue my parents.`,
             `**${user.username}**, don't let you mind wander, it's far too small to be out by itself.`,
             `**${user.username}**, I'd explain it to you but i don't have any crayons with me.`,
             `**${user.username}**, pls tell me you don't home-school your kids.`,
             `**${user.username}**, you are always lost in thought, and it's unfamiliar territory.`,
             `**${user.username}**, what are you going to do for a face when the baboon wants his butt back.`,
             `**${user.username}**, oh my God, look at you.Was anyone else hurt in the accident?`,
             `**${user.username}**, a tornado hit your home and caused $10000 worth of improvements.`,
             `**${user.username}**, you are few clowns short of circus.`,
             `**${user.username}**, if I could be one person for a day, it sure as hell wouldn't be you.`,
             `**${user.username}**, you have an insipid double chin, your legs are too short and you have a slight pot belly.`,
             `**${user.username}**, ever since I saw you in your family tree, I've wanted to cut it down.`,
             `**${user.username}**, I would call you a bird brain but if a bird had your brain it would try to fly sideways.`,
             `**${user.username}**, next time you give your clothes away, stay in them.`,
             `**${user.username}**, are you always an idiot, or just when I'm around?`,
             `**${user.username}**, someday you will find yourself - and wish you hadn't`,
             `**${user.username}**, they shot you through the stupid forest, and you hit every tree.`,
             `**${user.username}**, if you had another brain, it would be lonely.`,
             `**${user.username}**, I like your approach now let's see you departure.`,
             `**${user.username}**, I would love to roast you, but you wouldn't understand.`,
             `**${user.username}**, you are so dumb, your dog teaches you tricks.`,
             `**${user.username}**, are you gonna bark all day, little doggy, or are you gonna bite?`,
             `**${user.username}**, I know that you have to be somebody, but why do you have to be you.`,
             `**${user.username}**, I'm not going to get into a battle of wits with you; I never attack anyone who is unarmed.`,
             `**${user.username}**, I bet your mother barks louder.`,
             `**${user.username}**, I wish your parents had never met.`,
             `**${user.username}**, save your breath.You need it to scare your date.`,]);
                    //STARTS AT LINE 30

const result = Math.floor((Math.random() * roast.length));

    const roastEmbed = new discord.MessageEmbed()
   .setColor([227, 114, 237])
   .setDescription(roast[result])


  message.channel.send({embeds: [roastEmbed]})
  }
  };
