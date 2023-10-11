import {
  html,
  render,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../Services/Users.js";
import MainList from "./MainList.js";
import BudgetTool from "../BudgetTool/BudgetTool.js";
import Resources from "../Resources/Resources.js";

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return html`
    <ul class="navigation">
      <li>
        <a href="#" onclick=${showBudgetTool}>Budget Tool</a>
        <a href="#" onclick=${showResourcesPage}>Resources</a>
      </li>
    </ul>
    <div>
      <h1>Hi, Welcome to Budget Buddy!</h1>
      This is the stateful parent component.
      <${MainList} users=${users} />
    </div>
  `;
};

// Functions to switch pages; used in the Navigation bar
// Go to Budget Tool page
function showBudgetTool() {
  render(html` <${BudgetTool} /> `, document.getElementById("app"));
}

// Go to the Resources page
function showResourcesPage() {
  render(html` <${Resources} /> `, document.getElementById("app"));
}

export default Main;
