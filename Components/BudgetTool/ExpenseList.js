import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// Loads the json data into the check boxes as a series of options
const ExpenseList = ({ options }) => {
  return html`
    <div>
      ${options.map(
        (option) => html`
          <div key="${option}">
            <label>
              <input type="checkbox" />
              ${option.label}
            </label>
          </div>
        `
      )}
    </div>
  `;
};

export default ExpenseList;
