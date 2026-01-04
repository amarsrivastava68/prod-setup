import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

const config = {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 3000,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',
    DATABASE_URL: process.env.DATABASE_URL || ''
}

export default config
