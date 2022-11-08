const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const SimplDB = require('simpl.db');
client.db = new SimplDB();

client.login('MTAzNTMwNzc0MTQwMjY0NDUxMA.GSec2J.tZ76vs2xFXEjP8vvPlzEXowM5nDSXDx55O1sHY')

client.on("ready", async() => {
    console.log(`Conectei em: ${client.user.tag}`)
})
client.on("messageCreate", async (message) => {
    if (!message.guild || message.author.bot) return

    if(message.content === '!antilink off') {
        if(message.member.permissions.has('ADMINISTRATOR')) {
            message.reply({ content: `✅ **|** Olá ${message.member}, você acabou de desativar o antilink!` })
            client.db.set(`antilink.${message.guild.id}`, false)
        } else {
            message.reply({ content: `⚠ **|** Olá ${message.member}, Você não possue permissões para usar este comando!` })
        }
    }
    if(message.content === '!antilink on') {
        if(message.member.permissions.has('ADMINISTRATOR')) {
            message.reply({ content: `✅ **|** Olá ${message.member}, você acabou de ativar o antilink!` })
            client.db.set(`antilink.${message.guild.id}`, true)
        } else {
            message.reply({ content: `⚠ **|** Olá ${message.member}, Você não possue permissões para usar este comando!` })
        }
    }
})
client.on("messageCreate", async (message) => {
	if(!int.member.permissions.has(PermissionFlagsBits.Administrator)) return
	if (!message.guild) return

	let link = /(((discord.gg?)))/;

	if(client.db.get(`antilink.${message.guild.id}`) === true ) {
		if(link.test(message) === true) {
		   	     await message.delete().catch(saturndev => {})
        	             message.channel.send(`❌ **|** Olá ${message.member}, você precisa ter o cargo \`${role.name}\` para poder fazer isso!`).then(x => setTimeout(() => x.delete(), 10000).catch(saturndev => {})
                }
        }
})
