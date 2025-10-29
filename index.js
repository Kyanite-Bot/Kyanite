// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require("discord.js");

//importing my bot_token (please don't use user_token I was wondering for hours what went wrong here)
const { token } = require("./private/config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// run this after bot is ready
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// login
client.login(token);
