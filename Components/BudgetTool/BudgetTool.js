import {
  html,
  render,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Main from "../Main/Main.js";
import Resources from "../Resources/Resources.js";
import { getAllOptions } from "../../Services/Options.js";
import ExpenseList from "./ExpenseList.js";

const BudgetTool = () => {
  const [options, setOptions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(null);

  useEffect(() => {
    getAllOptions().then((options) => {
      setOptions(options);
    });
  }, []);

  const populateTotalIncome = (event) => {
    event.preventDefault();

    const salary = parseFloat(document.getElementById("salary").value);
    const gifts = parseFloat(document.getElementById("gifts").value);
    const other = parseFloat(document.getElementById("other").value);
    const total = salary + gifts + other;
    setTotalIncome(total);
  };

  return html`
    <ul class="navigation">
      <li>
        <a href="#" onclick=${showHomePage}>Home</a>
        <a href="#" onclick=${showResourcesPage}>Resources</a>
      </li>
    </ul>
    <h1>Welcome to the Budgeting Tool</h1>
    <div class="container">
      <form
        action="/budgetTool.php"
        id="budgetForm"
        onsubmit=${populateTotalIncome}
      >
        <h3>Income:</h3>
        <label for="salary">Salary: </label>
        <input type="text" placeholder="$" name="salary" id="salary" required />
        <br />
        <label for="gifts">Gifts: </label>
        <input type="text" placeholder="$" name="gifts" id="gifts" required />
        <br />
        <label for="other">Other: </label>
        <input type="text" placeholder="$" name="other" id="other" required />
        <p id="totalIncome">
          ${totalIncome !== null ? `Total Income: $${totalIncome}` : ""}
        </p>
        <br />
        <h3>Expenses:</h3>
        <div>
          <${ExpenseList} options=${options} />
        </div>
        <br />
        <br />
        <button type="submit" onclick="showTotal()">Submit</button>
      </form>
    </div>
  `;
};

// Budgeting tool to input any income (salary, gifts, other)
// and select common expenses to track and budget for

// Functions to switch pages; used in the Navigation bar
// Go home
function showHomePage() {
  render(html` <${Main} /> `, document.getElementById("app"));
}
// Go to the Resources page
function showResourcesPage() {
  render(html` <${Resources} /> `, document.getElementById("app"));
}

export default BudgetTool;
