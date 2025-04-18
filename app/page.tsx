import Income from './components/Income'
import css from './page.module.scss'

export default function Home() {
  return (
    <div className={css.page}>
      <main>
        <h1>Monthly budget calculator</h1>
        <Income />
      </main>
    </div>
  )
}
