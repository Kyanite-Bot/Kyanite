const { SlashCommandBuilder, time, TimestampStyles} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction) {
    // interaction.user is server
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `This command was run by ${
        interaction.user.username
      }, who joined the server ${time(
        interaction.member.joinedAt,
        TimestampStyles.RelativeTime
      )} and joined discord ${time(
        interaction.user.createdAt,
        TimestampStyles.RelativeTime
      )};`
    );
  },
};
