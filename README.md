# month_earnings

Project for month earnings (practice graphql with node)

To run this project just hit `npm run dev` it will trigger both the frontend and backend

This project uses `Sequelize` with [umzug](https://github.com/sequelize/umzug) and `postgresql`

there is an `.env.example` file with the variables used in this project create your own `.env` and replace accordingly

Currently data is being served using graphql with `Apollo server` and `Apollo Client`

To execute the initial migrations an populate your db you can use the command `npm run migrator `, to revert a migration `npm run migrator down `
