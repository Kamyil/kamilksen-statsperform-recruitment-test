# Candidate info
Name: Kamil Kseń
Applies for: Front-End Developer role

# Info about project itself

Application is pushed with it's compiled assets, to be sure that different Node version on different PC's will not lead Webpack to fail compilation. In normal work day `I DO NOT PUSH PREPARED JS/CSS TO GIT`.
If you want to run this app, you just need to run `index.html` in the browser. Nothing more, nothing less.
However if you want to have some fun with TS'es or SCSSes of this project, you need to do some steps to easly work on this project

1. Install all dev dependencies `npm i` / `npm install`.
2. Run one of those commands, depending on what do you want to do from this project
- `npm run build` - Full CI/CD build. Installs dependencies with `npm install` and compiles all files with Webpack for production environment
- `npm run dev` - Compiles all files with Webpack for dev environment.
- `npm run dev:watch` - Does completely the same, but it does not stop the proccess if it's done. Instead, it watches on any SCSS, TS, assets/ change and recompile when needed.

If you find any issue with compiling the project, it might be connected with Node/NPM version. In that case use something like NVM to switch version
I have this version and it works perfectly:

- Node: 10.16.3
- NPM: 6.9.0

Also in config.json there's my Github OAuth key to let this app fetch user repos unlimited times. I have in mind that it's not safe AND I DO NOT DO THAT DURING NORMAL DAY WORK, but since it's only small, showcase project I decided to make your life easier and do not force you to generate that key. I will remove after recrutation process

## Project structure
- node_modules/ (after `npm install` / `npm i`) Needed modules to compile project and get type definitions.
`IT DOES NOT CONTAIN ANY RUNTIME DEPENDENCIES. THEY'RE NEEDED FOR DEV WORK ONLY`
- public/ All compiled JS, CSS and images will go there. `index.html` use assets from this folder to properly show the app
- resources/ All precompiled files containing all SCSSes and TypeScript files as well
- - scss/
- - - Components/ Contains UI files
- - - Mixins/ Contains all reusable scss mixins and functions 
- - - main.scss Root styles file
- - - variables.scss - Contains all reusable global variable

- - typescript/ - Contains TS files
- - - Components/ - Contains files that manages UI 
- - - Services/ - Contains one ReposService that's responsible for fetching and returning sorted data from API
- - - main.ts - Root file that will be fired first on page load
- - - Selectors.ts - Contains object with all re-usable selectors
- - - types.d.ts - Contains type definitions for fetched data

- webpack/ - Contains compilation files for PROD and DEV environments
- index.html - Root HTML file. If you want to run the app, run this file
- package.json - Contains all metadata info about project, it's dev dependencies and scripts as well

# What had to be done here (quote)
<repos data-user="devballteam" data-update="2019-05-01"> zostanie on podmieniony na element div zawierający informacje o repozytoriach użytkownika podanego w data atrybucie userzaktualizowanych po dacie podanej w data atrybucie update. Aplikacja powinna mieć możliwość podmienienia więcej niż jednego tagurepos.

Tag div powinien zawierać informacje:

nazwę użytkownika
tabelę z jego repozytoriami w której będą następujące kolumny:
nazwa repozytorium
opis repozytorium
data ostatniej aktualizacji
link do ściągnięcia repozytorium
Wytyczne:

użycie jak największej ilości ES6
wykorzystanie preprocesora css (scss, less)
brak frameworków
obsługa błędów
kod umieszczony w repozytorium git
wykorzystanie TypeScript będzie dodatkowym atutem
dokumentacja w postaci JSDocs będzie dodatkowym atutem

# Important notes
- App, on it's pageload handles one repositories fetch specified in index.html
<repos data-user="devballteam" data-update="2019-05-01">
to show that it works. Later on, user can: add another tags with his own provided `data-user` and `data-update` and replace it with fetched content.

## Why OOP?
Since TypeScript provides very similar OOP syntax, comparing to other popular languages like Java, C# etc.
I find writing in OOP very convenient in LARGE scale projects with huge development teams. However, I do not 
favour OOP, because I adjust my tools for projects and I can write some pretty functional/IIFE modules as well. If I could rewrite whole projects to JS-IIFE modules I would do it like that

<!-- /resources/typescript/Services/ReposService -->

```ts
import { IRepoUser, IRepo } from 'types';
import * as CONFIG from '../../../config.json';

export const ReposService = (() => {
  /**
   * Fetches and returns `ALL (!)` user repositories from Github
   */
  async function fetch(username: string): Promise<IRepo[]> {
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
  function sort(repos: IRepo[], date): IRepo[] {
    return repos.filter(repo => repo.updated_at >= date);
  }

  /**
   * Fetches all user repositories and returns filtered ones
   * by specified last update date
   */
  function getReposFromSpecificDate(userName, updatedDate): Promise<IRepo[]> {
    const repos: IRepo[] = await this.fetch(userName);
    const filteredRepos = this.sort(repos, updatedDate);

    return filteredRepos;
  }

  return {
      fetch,
      sort,
      getReposFromSpecificDate
  }
})();
```
Since... those modules work like Classes with static methods, I can use it's methods without event instatiating it. But I choosed to write in OOP, since it's more popular :)

## Why do you not use export default
I'm not stubborn about it but... I don't like export default very much. It allows to use modules named differently in their references which can lead to huge file chaos. I prefer to use original filenames and rename it with `import { Something as SomethingElse } from '...'` syntax ONLY IF IT'S NEEDED!
