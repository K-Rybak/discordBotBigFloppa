const func = require('./commands_functions');

// Список команд

let command_list = [{
    name: 'repeat',
    out: func.repeat,
    about: 'Повторяет сообщение пользователя'
},
{
    name: 'hello',
    out: func.hello,
    about: 'Приветствие'
},
{
    name: 'ping',
    out: func.ping,
    about: 'Показывает Ping сообщения'
},
{
    name: 'sum',
    out: func.sum,
    about: 'Суммирует все аргументы'
},
{
    name: 'heads_or_tails',
    out: func.headsOrTails,
    about: 'Орел или решка'
},
{
    name: 'change_nick',
    out: func.changeNick,
    about: 'Смена никнейма'
},
{
    name: 'help',
    out: func.help,
    about: 'Показать все комманды'
}];

module.exports.comms_list = command_list;