"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
var client = new discord_js_1.default.Client();
client.on('message', function (msg) {
    // if (msg.author.id === client.user?.id || msg.author.bot) return;
    var _a;
    // if (msg.content.search(/어떻게/) !== -1) {
    //   console.log(msg.content);
    //   msg.channel.send(`> ${msg.content}\n${msg.author} Fun하고 Cool하고 Sexy하게 해야 합니다.`)
    // }
    // else if (msg.content.search(/['왜'|'?']/) !== -1) {
    //   console.log(msg.content)
    //   msg.reply('그걸 설명하는 것 자체가 섹시하지 않네요')
    // } else if (msg.content.search(/(하고)?''|' '싶다/) !== -1) {
    //   console.log(msg.content)
    //   msg.channel.send(`@${msg.author.username} ~하는 것은, ~하는 것입니다`)
    // }
    if (msg.author.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id) || msg.author.bot)
        return;
    if (msg.content.search(/[켜져|살아]있냐/) !== -1) {
        msg.channel.send('저는 죽지 않았습니다. 왜냐하면 살아있기 때문입니다.');
    }
    if (msg.content.search(/할거("?"|임"?"?)/) !== -1) {
        msg.channel.send("<@" + msg.author.id + "> \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uAC83\uC774 \uC57D\uC18D\uC774\uB2C8\uAE4C");
    }
    if (msg.content.search(/어떻게/) !== -1) {
        msg.channel.send("> " + msg.content + "\n<@" + msg.author.id + "> Fun\uD558\uACE0 Cool\uD558\uACE0 Sexy\uD558\uAC8C \uD574\uC57C \uD569\uB2C8\uB2E4.");
    }
    else if (msg.content.search(/['왜'|'?']/) !== -1) {
        msg.channel.send("> " + msg.content + "\n<@" + msg.author.id + "> \uADF8\uAC78 \uC124\uBA85\uD558\uB294 \uAC83 \uC790\uCCB4\uAC00 \uC139\uC2DC\uD558\uC9C0 \uC54A\uB124\uC694.");
    }
});
dotenv_1.default.config();
client.login(process.env.TOKEN);
console.log('Discord client login');
