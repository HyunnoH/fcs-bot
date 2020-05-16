import Discord from 'discord.js'

const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id === client.user?.id) return;

  if (msg.content.search(/어떻게/) !== -1) {
    msg.channel.send(`> ${msg.content}\n${msg.author} Fun하고 Cool하고 Sexy하게 해야 합니다.`);
  }
  else if (msg.content.search(/['왜'|'?']/) !== -1) {
    console.log(msg.content)
    msg.reply('그걸 설명하는 것 자체가 섹시하지 않네요')
  } else if (msg.content.search(/(하고)?''|' '싶다/) !== -1) {
    console.log(msg.content)
    msg.channel.send(`@${msg.author.username} ~하는 것은, ~하는 것입니다`)
  }
});

client.login('NzA5MDAwNzM3NTY4NDU2Nzk0.Xr_hhQ.15ehTql1mlptRCgPThshcxctmqQ')
console.log('Discord client login')