import css from './page.module.css'

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h1>Monthly budget calculator</h1>
      </main>
      <footer className={css.footer}></footer>
    </div>
  )
}
