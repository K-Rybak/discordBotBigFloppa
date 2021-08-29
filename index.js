const Discord = require('discord.js');
const fs = require('fs');
const commands = require('./commands/commands_list.js');
const config = require('./config.json');

const bot = new Discord.Client();

let token = config.token;
let prefix = config.prefix;

bot.on("ready", () => {
    console.log(bot.user.username + ' запустился!');
});

// реагирование на сообщения
bot.on('message', (msg) => {
    if (msg.author.username != bot.user.username &&
        msg.author.discriminator != bot.user.discriminator) {
            let comm = msg.content.trim();
            let msgArgs = comm.split(' ');
            let comm_name = msgArgs.shift().toLowerCase()
            let count = 0;
            for (comm_count in commands.comms_list) {
                let comm2 = prefix + commands.comms_list[comm_count].name; 
                if (comm2 == comm_name) {
                    commands.comms_list[comm_count].out(bot, msg, msgArgs);
                    count++;
                }
            }

            if (count === 0 && comm_name.startsWith(prefix)) {
                const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Ошибочка :(')
                .setAuthor(msg.guild.name)
                .setDescription('Такой команды нет')
                .setFooter('Bot VaSaBoLiA © 2021');
        
                 msg.reply(embed);
            }
        }
});

bot.login(token); // Авторизация бота
