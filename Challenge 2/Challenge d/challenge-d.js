import {company} from './config.js' // changed form to from
import {year} from './config.js' // changed form to from

const message = '© ' + company + ' (' + year + ')'; 
document.querySelector('footer').innerText = message;

