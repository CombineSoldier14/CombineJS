const { SlashCommandBuilder } = require('discord.js');
const { CombineJS } = require('../../core/combinejs.js');
const rn = require('random-number');

const options = {
    min: 1, 
    max: 2973,
    integer: true
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xkcdrandom')
        .setDescription('Get a random XKCD comic!'),
    
    async execute (interaction: any) {
        const request = await CombineJS.get(`https://xkcd.com/${rn(options)}/info.0.json`);
        const response = await request.json();
        let embed = await CombineJS.embed();
        embed.setTitle(`#${response.num} - ${response.title}`);
        embed.setDescription(`${response.alt}`);
        embed.setFooter({text: `${response.month}/${response.day}/${response.year}`});
        embed.setImage(response.img);
        await interaction.reply({ embeds: [embed] });
    }
}
export {};
