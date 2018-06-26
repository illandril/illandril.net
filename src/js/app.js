import { MDCRipple } from '@material/ripple';
Array.prototype.forEach.call(document.querySelectorAll('[href]'), (button) => new MDCRipple(button));
