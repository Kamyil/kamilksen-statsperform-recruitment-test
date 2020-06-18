import { Selector } from '../Selectors';
import { ReposTag } from './ReposTag';
import { ReposTable } from './ReposTable';

interface IReposForm {
    dataUser: string,
    dataUpdate: string
}

/**
 * Handles <repo data-user data-update> form on upper side of the screen.
 */
export class ReposForm {
    // Inject other components
    ReposTag = new ReposTag();
    ReposTable = new ReposTable();

    /**
     * Initialises form by adding event listeners to form buttons
     */
    public init(): void {
        // Register listeners on buttons
        document
            .querySelector(Selector.REPO.ADD_BTN)
            .addEventListener('click', this.submit);

        document
            .querySelector(Selector.REPO.REPLACE_ALL_TAGS_BTN)
            .addEventListener('click', this.replaceAll);
    }

    /**
     * Returns `data-user` and `data-update` values, provided by user in UI
     */
    public get values(): IReposForm {
        return {
            dataUser: 
                (document.querySelector(Selector.REPO.DATA_USER_INPUT) as HTMLInputElement).value,
            dataUpdate: 
                (document.querySelector(Selector.REPO.DATA_UPDATE_INPUT) as HTMLInputElement).value
        }
    }

    public validateDate(date: string): boolean {
        if (String(new Date(date)) === 'Invalid Date') {
            alert('Invalid date format. Please provide date in following format: YEAR-MONTH-DAY ex. 2020-12-17');
            return false;
        } else {
            return true;
        }
    }

    private validateUsername(name): boolean {
        if (name !== '') {
            return true;
        } else {
            alert('data-user field is empty.')
            return false;
        }
    }



    /**
     * Handles adding new <repos> tag after inputs validation
     */
    public submit = (): void => {
        // Validate date format before submitting
        const isDateValid = this.validateDate(this.values.dataUpdate);
        const isUsernameValid = this.validateUsername(this.values.dataUser);

        if (isDateValid && isUsernameValid) {
            // if date is valid, then pass
            this.ReposTag.add({
                username: this.values.dataUser,
                updateDate: this.values.dataUpdate
            });
            alert('Repos tag added successfully! Now you can replace it with content by hitting Replace All btn or check it in Browser Inspector in .repos__tags-container div');
        } else {
            // Alerts will be shown. Then shut the process down   
            return;
        }
    }

    /**
     * Calls all <repos> tags to be replaced with content
     * that can be visible by user
     */
    public replaceAll = (): void => {
        this.ReposTable.replaceAll();
    }
}