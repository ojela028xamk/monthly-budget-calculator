import { Button, TextField } from '@radix-ui/themes'
import css from './income.module.scss'
import { IoMdAdd } from 'react-icons/io'

export default function Income() {
  return (
    <div className={css.income}>
      <h2>Income</h2>
      <div className={css.add_item}>
        <TextField.Root className={css.input} placeholder="Income item..." />
        <TextField.Root className={css.input} placeholder="€ amount..." />
        <Button className={css.button}>
          <IoMdAdd />
        </Button>
      </div>
    </div>
  )
}
