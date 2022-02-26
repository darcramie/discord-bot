const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "!"

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivée");
    Client.channels.cache.get("935140125262884889").send(member.displayName + "est arrivée.");

});

Client.on("guildMemberRemove", member => {
    console.log("un membre vient de quitter le serveur");


})
Client.on("messageCreate", message => {
    if(message.author.bot) return;

        //!youtube
        if(message.content === prefix + "youtube")
            message.reply("chaine de ahmed V: https://m.youtube.com/channel/UCgEfo5Ju_r1tL53HIuHBhBw")

    
        //!help
       if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setAuthor("autheur du bot rayoux", )
            .setColor("AQUA")
            .setTitle("liste des commandes")
            .addField("**__!help__**", "Affiche la liste des commandes")
            .addField("**!__youtube__**","donne la chaine youtube de Ahmed V");
      
    
        
        message.channel.send({ embeds: [embed]});
    }
})


Client.login("OTQ1NzMxMTk2OTcxNzkwNDE2.YhUa0A.YfE3VblX0hVbYow__fRvXjNSznw")