export const REDDIT_CONFIG = {
  CLIENT_ID: process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID!,
  CLIENT_SECRET: process.env.REDDIT_CLIENT_SECRET!,
  REDIRECT_URI: 'http://localhost:3000',
  USER_AGENT: 'web:quick:v1.0.0 (by /u/No_Software_4737)',
  BASE_URL: 'https://oauth.reddit.com',
  AUTH_URL: 'https://www.reddit.com/api/v1/authorize',
  TOKEN_URL: 'https://www.reddit.com/api/v1/access_token',
}; 