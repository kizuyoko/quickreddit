import { REDDIT_CONFIG } from '@/config/reddit';
import { RedditPost } from '@/types/redditType';

interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}

class RedditApi {
  private accessToken: string | null = null;

  private async getAccessToken(): Promise<string> {
    if (this.accessToken) return this.accessToken;

    const basic = btoa(`${REDDIT_CONFIG.CLIENT_ID}:${REDDIT_CONFIG.CLIENT_SECRET}`);
    
    const response = await fetch(REDDIT_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': REDDIT_CONFIG.USER_AGENT,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    
    // Token expires in 1 hour, clear it after 55 minutes
    setTimeout(() => {
      this.accessToken = null;
    }, 55 * 60 * 1000);

    if (!this.accessToken) throw new Error('Failed to get access token');
    return this.accessToken;
  }

  async fetchPosts(subreddit: string): Promise<RedditPost[]> {
    const token = await this.getAccessToken();
    
    const response = await fetch(`${REDDIT_CONFIG.BASE_URL}/r/${subreddit}.json`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': REDDIT_CONFIG.USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json() as RedditResponse;
    return data.data.children.map(child => child.data);
  }
}

export const redditApi = new RedditApi(); 