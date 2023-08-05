const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

const token = 'TOKEN';
const gifnum = 20; //Number of gifs you want the bot to send

const gifList = [
  'https://media.discordapp.net/attachments/988862412260274176/1016882879814455357/caption.gif',
  'https://media.discordapp.net/attachments/1082570905311522878/1083477048179302430/A8958111-216C-485C-8EF5-B056C303EF00.gif',
  'https://media.discordapp.net/attachments/1080590577873199154/1081129345298485288/image0-3.gif',
];

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const userIdToPing = '1041175412090347550';

  if (message.content.includes(userIdToPing)) {
    const userToPing = await message.guild.members.fetch(userIdToPing);

    if (userToPing) {
      message.reply(`ur a dick <@${message.author.id}>`);

      for (let i = 0; i < gifnum; i++) {
        const randomGif = gifList[Math.floor(Math.random() * gifList.length)];
        await message.author.send(randomGif);
      }
    }
  }
});

client.login(token);
