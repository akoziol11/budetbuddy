import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Main from "../Main/Main.js";
import BudgetTool from "../BudgetTool/BudgetTool.js";

// A page of resources regarding saving money, etc.
// Future work: add different web pages and videos with
// tips about budgeting, etc.

const Resources = () => {
  return html`
    <ul class="navigation">
      <li>
        <a href="#" onclick=${showHomePage}>Home</a>
        <a href="#" onclick=${showBudgetTool}>Budget Tool</a>
      </li>
    </ul>
    <h1>Welcome to the Resources Page</h1>
  `;
};

// Functions to switch pages; used in the Navigation bar
// Go home
function showHomePage() {
  render(html` <${Main} /> `, document.getElementById("app"));
}

// Go to Budget Tool page
function showBudgetTool() {
  render(html` <${BudgetTool} /> `, document.getElementById("app"));
}

export default Resources;
