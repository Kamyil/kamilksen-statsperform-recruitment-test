import { IRepoTagDataAttributes } from '../types';
import { Selector } from '../Selectors';

/**
 * Simple <repos> Tag manager
 */
export class ReposTag {

    /**
     * Adds new `<repo>` tag to the DOM with specified data attributes:
     * @param username - Username
     * @param updateDate - Update Date 
     */
    public add({ username, updateDate }: IRepoTagDataAttributes): void {
        const newTag = document.createElement(Selector.REPO.TAG);
        
        newTag.dataset.id = String(this.amount + 1);
        newTag.dataset.user = username;
        newTag.dataset.update = updateDate;

        document.querySelector(Selector.REPO.TAGS_CONTAINER).appendChild(newTag);
    }

    /**
     * Removes all <repos> tags
     */
    public removeAll(): void {
        document.querySelectorAll(Selector.REPO.TAG)
            .forEach((tag) => {
                tag.remove();
            });
    }

    /**
     * Gets the current amount of <repos> tags
     */
    private get amount(): number {
        return document.querySelectorAll(Selector.REPO.TAG).length;
    }
}