import css from "./income.module.scss"

export default function Income() {
  return (
    <div className={css.income}>
      <h2>Income</h2>
      <form>
        <label htmlFor="income-amount">
          Amount:
          <input type="number" id="income-amount" />
        </label>
        <label htmlFor="income-frequency">
          Frequency:
          <select id="income-frequency">
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
      </form>
    </div>
  )
}
