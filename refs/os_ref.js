const os = require('os');

console.log('Платформа: ', os.platform());

console.log('Архитектура: ', os.arch());

// Информация
console.log(os.cpus())

console.log('Свободно памяти: ', os.freemem());
console.log('Всего памяти: ', os.totalmem());

console.log('Корневая директория: ',os.homedir());

console.log('Система работает уже: ', os.uptime()); // в милисекундах