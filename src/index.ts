import Discord from "discord.js";
import dotenv from "dotenv";

const client = new Discord.Client();

client.on("message", (msg) => {
  if (msg.author.id === client.user?.id || msg.author.bot) return;

  if (msg.content.search(/[켜져|살아]있냐/) !== -1) {
    msg.channel.send("저는 죽지 않았습니다. 왜냐하면 살아있기 때문입니다.");
  }
  if (msg.content.search(/할거("?"|임"?"?)/) !== -1) {
    msg.channel.send(`<@${msg.author.id}> 하겠습니다. 그것이 약속이니까`);
  }
  if (msg.content.search(/어떻게/) !== -1) {
    msg.channel.send(
      `> ${msg.content}\n<@${msg.author.id}> Fun하고 Cool하고 Sexy하게 해야 합니다.`
    );
  } else if (msg.content.search(/['왜'|'?']/) !== -1) {
    msg.channel.send(
      `> ${msg.content}\n<@${msg.author.id}> 그걸 설명하는 것 자체가 섹시하지 않네요.`
    );
  }
});

});

dotenv.config()
client.login(process.env.TOKEN)
console.log('Discord client login')