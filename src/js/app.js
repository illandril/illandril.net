import { MDCRipple } from '@material/ripple';
Array.prototype.forEach.call(document.querySelectorAll('a[href]'), (button) => new MDCRipple(button));
