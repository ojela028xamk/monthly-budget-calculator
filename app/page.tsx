import Income from "./components/income"
import css from "./page.module.scss"

export default function Home() {
  return (
    <div className={css.page}>
      <h1>Monthy Budget Calculator</h1>
      <Income />
    </div>
  )
}
