const {
  SlashCommandBuilder,
  bold,
  time,
  TimestampStyles,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    // interaction.guild is server 
    await interaction.reply(
      `This server is ${bold(interaction.guild.name)} and has ${
        interaction.guild.memberCount
      } members. and was made ${time(
        interaction.guild.createdAt ,
        TimestampStyles.RelativeTime
      )}`
    );
  },
};
