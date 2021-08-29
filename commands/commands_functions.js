const listOfCommands = require('./commands_list');
const Discord = require('discord.js');

module.exports.repeat = function (bot, msg, args) {
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.channel.send("У Вас нет прав!");
        return;
    }

    args = args.join(' ');

    msg.delete().catch(console.error);
    msg.channel.send(args);
}

module.exports.hello = (bot, msg, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#32CD32')
        .setTitle('Привет :)')
        .setAuthor(msg.guild.name)
        .setDescription('Я гоню быстро')
        .setFooter('Ваш бот © 2021');

    msg.reply(embed);
}

module.exports.ping = function (bot, msg, args) {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! Пинг данного сообщения: ${timeTaken}ms.`);
}

module.exports.sum = function (bot, msg, args){
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    msg.reply(`Сумма всех введеных чисел: ${sum}!`)
}

module.exports.headsOrTails = function (bot, msg, args) {
    msg.channel.send('Монета подбрасывается...');

    let random = Math.ceil(Math.random() * 3);

    if (random === 1) {
        msg.channel.send(':full_moon: Орёл!');
    } 
    if (random === 2) {
        msg.channel.send(':new_moon: Решка!');
    } 
    else if (random === 3) {
        msg.channel.send(':last_quarter_moon: Монета упала ребром!');
    }
}

module.exports.changeNick = function (bot, msg, args) {
    if (!msg.member.hasPermission('MANAGE_NICKNAMES')) {
        msg.channel.send('У вас нет прав!');
        return;
    }
    let target = msg.mentions.users.first();
    let member = msg.guild.members.cache.get(target.id);
    args.shift();
    let nickname = args.join(' ');
    member.setNickname(nickname)

    msg.reply('Вы поменяли ник');
}

module.exports.help = (bot, msg, arg) => {
    let list = ''
    
    for (comm_count in listOfCommands.comms_list) {
        list += listOfCommands.comms_list[comm_count].name +
           ' - ' + listOfCommands.comms_list[comm_count].about + '\n';
    }

    msg.channel.send('Мои возможности:\n' + list);
}