import type { CountryCode, NumberFormat } from 'libphonenumber-js';

export type Country = [
  CountryName: string,
  Iso2: Lowercase<CountryCode>,
  DialCode: string,
  Priority?: number,
  AreaCodes?: string[]
];

export interface CountryObject {
  name: string;
  iso2: CountryCode;
  dialCode: string;
  priority: number;
  areaCodes: string[] | null;
}

export type PhoneMeta = {
  country: CountryCode
  countryCode: CountryCode,
  valid: boolean,
  possible: boolean,
  formatted: string,
  nationalNumber: string
};

export interface DropdownOptions {
  /**
   * Disable dropdown
   */
  disabled?: boolean
  /**
   * Show dial code in the dropdown list
   */
  showDialCodeInList?: boolean
  /**
   * Show dial code in the dropdown selection
   */
  showDialCodeInSelection?: boolean
  /**
   * Show flags in the dropdown selection and list
   */
  showFlags?: boolean
  /**
   * Show country search box
   */
  showSearchBox?: boolean
  /**
   * Placeholder for the search box
   */
  searchBoxPlaceholder?: string
  /**
   * Native dropdown tabindex attribute
   */
  tabindex?: number
}

export interface InputOptions {
  /**
   * Native input autocomplete attribute
   */
  autocomplete?: string
  /**
   * Native input autofocus attribute
   */
  autofocus?: boolean
  // dynamicPlaceholder?: boolean
  /**
   * Native input aria-describedby attribute
   */
  'aria-describedby'?: string
  /**
   * Native input id attribute
   */
  id?: string
  /**
   * Native input maxlength attribute
   */
  maxlength?: number
  /**
   * Native input name attribute
   */
  name?: string
  /**
   * Show dial code in input
   */
  showDialCode?: boolean
  /**
   * Placeholder for the input
   */
  placeholder?: string
  /**
   * Native input readonly attribute
   */
  readonly?: boolean
  /**
   * Native input required attribute
   */
  required?: boolean
  /**
   * Native input tabindex attribute
   */
  tabindex?: number
  /**
   * Native input type attribute
   */
  type?: string
  /**
   * Custom classes for the input
   */
  styleClasses?: any
}


/**
 * Configuration options for Vue Tel Input.
 */
export interface VueTelInputOptions {
  /**
   * All countries that are used in libphonenumber-js, can be overridden by this prop.
   */
  allCountries: CountryObject[];

  /**
   * Auto update the input to the formatted phone number when it's valid.
   */
  autoFormat: boolean;

  /**
   * Custom validation RegExp for input.
   */
  customValidate: boolean | RegExp;

  /**
   * Default country (by iso2 or dialCode), will override the country fetched from IP address of user.
   */
  defaultCountry: string | number;

  /**
   * Disable vue-tel-input, including the input & flag dropdown.
   */
  disabled: boolean;

  /**
   * To fetch default country based on IP address of user.
   */
  autoDefaultCountry: boolean;

  /**
   * Options for dropdown configuration.
   */
  dropdownOptions: DropdownOptions;

  /**
   * List of countries that will NOT be shown on the dropdown.
   */
  ignoredCountries: string[];

  /**
   * Options for input configuration.
   */
  inputOptions: InputOptions;

  /**
   * Invalid message to display.
   */
  invalidMsg?: string;

  /**
   * Allowed values: 'auto' (Default set by phone), 'international' (Format number with the dial code, e.g., +61), 'national' (Format number without dial code, e.g., 0321232).
   */
  mode: 'auto' | Lowercase<NumberFormat>

  /**
   * List of countries that will be shown on the dropdown.
   */
  onlyCountries: string[];

  /**
   * Preferred countries list, which will appear on top of the dropdown.
   */
  preferredCountries: string[];

  /**
   * Custom classes for the wrapper.
   */
  styleClasses?: string | string[] | Record<string, boolean>;

  /**
   * Only allow valid characters in a phone number (will also verify in mounted, so phone number with invalid characters will be shown as an empty string).
   */
  validCharactersOnly: boolean;
}
