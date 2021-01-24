const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'afro ?(.*)', fromMe: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('Duygularını ifade edecek bir isim yazmalısın 💝');

    await message.sendMessage(`*Sana birşey söyliyeceğim ${match[1]}, hazırmısın <(￣︶￣)>*`);

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*Ben sana yürümek istiyorum* 💕');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*Aç kalbinin kapısını lütfen.*');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Kapı Açıldı Saldır Komutu Bekleniyor*\n🐅 🐆');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Komut Geldi Bombalar Hazırlanıyor*\n🏹 🏹');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Saldırı başlatılıyor*\n🏰 💣');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Bombaya Gerek yok, Gözlerindeki Derinlik İçimi Yıkmaya Yeter〽*\n(*˘︶˘*).｡*♡');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Bana şair diyorlar da senin şiir olduğunu göremiyorlar ✍🏻*');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Düşürme Tamamlandı...*');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Sosyal Medya Hesabı İsteniyor.. 💫*');

    await new Promise(r => setTimeout(r, 1200));

    await message.sendMessage('*Özele Bekleniyorsunuz..* 🔐');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage(`❤️❤️❤️${match[1]}❤️❤️❤️\n❤️❤️😍😍❤️😍😍❤️❤️\n❤️😍😍😍😍😍😍😍❤️\n❤️😍😍😍😍😍😍😍❤️\n❤️😍😍😍😍😍😍😍❤️\n❤️❤️😍😍😍😍😍❤️❤️\n❤️❤️❤️😍😍😍❤️❤️❤️\n❤️❤️❤️❤️😍❤️❤️❤️❤️`);

}));

Asena.addCommand({pattern: 'infoafro', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @Unique_hunter*\nSadece dene ve gör kız düşürmeye bire bir.\n💻Usage: *.afro isim*")

}));