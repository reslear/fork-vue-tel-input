// import allCountries from './assets/all-countries';

export function getCountry() {
  return fetch('https://ip2c.org/s')
    .then((response) => response.text())
    .then((response) => {
      const result = (response || '').toString();

      if (!result || result[0] !== '1') {
        throw new Error('unable to fetch the country');
      }

      return result.substr(2, 2);
    });
}

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl: HTMLInputElement, pos: number) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

    // IE8 and below
  } else if ('createTextRange' in ctrl && typeof ctrl.createTextRange === 'function') {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

export function toLowerCase<T extends string> (str: T) {
  return str?.toLowerCase() as Lowercase<T>;
}

export function toUpperCase<T extends string> (str: T) {
  return str?.toUpperCase() as Uppercase<T>;
}
