const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Shows detailed info on the server you\'re in'),
    async execute (interaction: any) {
            let embed = await CombineBot.embed();
            embed.setTitle(`Info on ${interaction.guild.name}`);
            embed.setDescription(`Created at: ${interaction.guild.createdAt}\nID: ${interaction.guild.id}\nMembers: ${interaction.guild.memberCount}`);
            embed.setThumbnail(`https://cdn.discordapp.com/icons/${interaction.guild.id}/${interaction.guild.icon}.png?size=1024`);
            embed.setColor(0xffd700);
        await interaction.reply({ embeds: [embed] });
    },
};
export {};
