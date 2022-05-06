import 'dotenv/config';

const config = {
  PORT: process.env.PORT || 8080,
  ENV: process.env.ENV || 'development',
  API_KEY: process.env.API_KEY || '243de1b12b6cca5e7973e01072846ed9',
} 

export default config;