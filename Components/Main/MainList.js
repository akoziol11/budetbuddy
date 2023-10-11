import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ users }) => {
  return html`
    <div>
      <hr />
      Welcome to Budget Buddy, where you can keep track of your spending, plan
      for the month, and <b>save money!</b>
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}">
              ${user.email} | ${user.firstName} ${user.lastName}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;
