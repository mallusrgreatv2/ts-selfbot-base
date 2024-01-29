# Selfbot Base (Typescript)

This is a template you can use to start building new selfbots easier with [discord.js-selfbot-v13](https://npm.im/discord.js-selfbot-v13) in Node.js with TypeScript.

## Features

- Nice logging
- File-related handlers done easy
- Create commands and events easily
- Extremely typesafe
- Runtime type checking with zod

## Setup

```bash
git clone https://github.com/mallusrgreatv2/ts-selfbot-base.git
cd ts-selfbot-base
yarn
cp .env.example .env # configure the .env file
yarn start
```

## Environment Variables

To run this project, you will need to add the following environment variable(s) to your .env file

`ACCOUNT_TOKEN` - The token to your Discord account

## Configuration

You can configure the selfbot's aspects in config.json
You can access this using \<Selfbot\>.config.\<configuration\> like so: `selfbot.config.prefix`

## Screenshots

(![Help and ping command](https://github.com/mallusrgreatv2/ts-selfbot-base/assets/69511006/de590f18-eda3-4644-9f5e-6375ac6ba64e)

## Roadmap

## License

This project is licensed by the [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0//) license. Read the full license page [here](https://raw.githubusercontent.com/mallusrgreatv2/ts-selfbot-base/main/LICENSE).
