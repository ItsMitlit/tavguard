const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

const token = 'TOKEN'; // The bot token
const guardedUser = 'USER_ID'; // The user ID of the person you want to guard (not be pinged)
const gifnum = 20; // Number of GIFs you want the bot to send

const gifList = [
  'https://media.discordapp.net/attachments/988862412260274176/1016882879814455357/caption.gif',
  'https://media.discordapp.net/attachments/1082570905311522878/1083477048179302430/A8958111-216C-485C-8EF5-B056C303EF00.gif',
  'https://media.discordapp.net/attachments/1080590577873199154/1081129345298485288/image0-3.gif',
]; // You can change the images or add more

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.includes(guardedUser)) {
    const userToPing = await message.guild.members.fetch(guardedUser);

    if (userToPing) {
      message.reply(`ur a dick <@${message.author.id}>`); // The message you want the bot to reply with

      for (let i = 0; i < gifnum; i++) {
        const randomGif = gifList[Math.floor(Math.random() * gifList.length)];
        await message.author.send(randomGif);
      }
    }
  }
});

client.login(token);
