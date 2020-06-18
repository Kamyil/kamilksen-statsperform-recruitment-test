import { Selector } from '../Selectors';
import { ReposService } from '../Services/ReposService';
import { IRepo } from '../types';
import { ReposTag } from './ReposTag';


/**
 * Table Component, responsible for displaying replaced tags with fetched data
 */
export class ReposTable {

    // Inject dependencies
    ReposService = new ReposService();
    ReposTag = new ReposTag();

    /**
     * Injects prepared HTML to Table UI
     * 
     * @param userName
     * @param repos
     */
    public add(userName: string, repos: IRepo[]): void {
        const newRow = document.createElement('div');
        newRow.className = 'repos__user';
        newRow.innerHTML = `
        <!-- USER WITH REPOS START -->
                <h1 class="repos__username">${userName}</h1>
                <table class="repos__table">
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Updated at</th>
                        <th>Download</th>
                    </thead>
                    <tbody>
                        ${this.parseReposToTableRows(userName, repos)}
                    </tbody>
                </table>
        <!-- USER WITH REPOS END -->
        `;

        document.querySelector(Selector.REPO.LIST).append(newRow);
    }

    /**
     * Replaces all ReposTag with new table row
     * containing all repo informations from specific user
     */
    public replaceAll(): void {
        const repoTags: NodeListOf<HTMLElement> = document.querySelectorAll(Selector.REPO.TAG);

        repoTags.forEach(async (tag) => {
            const { user, update } = tag.dataset;
            const repos: IRepo[] = await this.ReposService.getReposFromSpecificDate(user, update);

            // Add content from tag
            this.add(user, repos);
            // Remove tags
            this.ReposTag.removeAll();
            // Tell user what happened
            console.log('Content downloaded succesfully. <repos> tags are cleared');
        });
    }

    /**
     * Prepares user's repository data into ready to show Table Row
     * 
     * @param userName 
     * @param repos 
     */
    public parseReposToTableRows(userName: string, repos: IRepo[]): string {
        let resultHtml: string = '';

        for (const repo of repos) {
            resultHtml += `
            <tr>
                <td>${repo.name}</td>
                <td>${repo.description === null ? 'Empty' : repo.description}</td>
                <td>${repo.updated_at}</td>
                <td>
                    <a href="${this.prepareDownloadLink(userName, repo.name)}"> 
                        <button class="btn--primary">
                            Download as ZIP
                        </button>
                    </a>

                </td>
            </tr>
        `;
        }

        return resultHtml;
    }

    /**
     * Prepares repository download link (as ZIP) from GitHub
     * @param userName 
     * @param repoName 
     */
    public prepareDownloadLink(userName, repoName: string): string {
        return `https://github.com/${userName}/${repoName}/archive/master.zip`;
    }
}