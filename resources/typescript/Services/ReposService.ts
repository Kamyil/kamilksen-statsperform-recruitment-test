import { IRepoUser, IRepo } from 'types';
import * as CONFIG from '../../../config.json';

export class ReposService {
  /**
   * Fetches and returns `ALL (!)` user repositories from Github
   */
  public async fetch(username: string): Promise<IRepo[]> {
    let result;
    try {
      await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': CONFIG.AUTH_KEY
        },
      }).then((response) => result = response.json());
    } catch (err) {
      console.error(`Could not fetch user repositories`, err.message);
    } finally {
      return result;
    }
  }

  /**
   * Filters and returns all repositories last updated from specified date
   * @param repos 
   */
  public sort(repos: IRepo[], date): IRepo[] {
    return repos.filter(repo => repo.updated_at >= date);
  }

  /**
   * Fetches all user repositories and returns filtered ones
   * by specified last update date
   */
  public async getReposFromSpecificDate(userName, updatedDate): Promise<IRepo[]> {
    const repos: IRepo[] = await this.fetch(userName);
    const filteredRepos = this.sort(repos, updatedDate);

    return filteredRepos;
  }
}