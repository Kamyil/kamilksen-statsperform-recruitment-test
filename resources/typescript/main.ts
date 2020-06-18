import { ReposForm } from './Components/ReposForm';
import { ReposTable } from "./Components/ReposTable";
import { ReposTag } from './Components/ReposTag';

// Replace the example <repos> tag due to task description on App init
const reposTable = new ReposTable();
reposTable.replaceAll();

// and initialise form, connecting event listeners on buttons in the same time
const reposForm = new ReposForm();
reposForm.init();

const reposTag = new ReposTag();
// and cleanup all repos tags as well
reposTag.removeAll();
// Other tags can be added/removed/replaced to table rows later in UI 
