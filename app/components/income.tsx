'use client'
import { Button, TextField } from '@radix-ui/themes'
import css from './income.module.scss'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react'

type IncomeItem = {
  name: string
  amount: number
}

export default function Income() {
  const [incomeList, setIncomeList] = useState<IncomeItem[]>([])
  const [incomeName, setIncomeName] = useState<string>('')
  const [incomeAmount, setIncomeAmount] = useState<number>(0)
  const isValidInputs = incomeName !== '' && incomeAmount > 0

  function handleIncomeName(event: React.ChangeEvent<HTMLInputElement>) {
    const newName = event.target.value
    setIncomeName(newName)
  }

  function handleIncomeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const newAmount = Number(event.target.value)
    setIncomeAmount(newAmount)
  }

  function handleAddIncomeItem() {
    setIncomeList([...incomeList, { name: incomeName, amount: incomeAmount }])
    setIncomeName('')
    setIncomeAmount(0)
  }

  return (
    <div className={css.income}>
      <h2>Income</h2>
      <div className={css.income_add_item}>
        <TextField.Root
          className={css.input}
          type="text"
          value={incomeName}
          onChange={handleIncomeName}
          placeholder="Income item..."
        />
        <TextField.Root
          className={css.input}
          type="number"
          value={incomeAmount}
          onChange={handleIncomeAmount}
        />
        <Button className={css.button} onClick={handleAddIncomeItem} disabled={!isValidInputs}>
          <IoMdAdd />
        </Button>
      </div>
      <div className={css.income_list}>
        {incomeList.map((item, index) => (
          <div key={index}>
            <b>{item.name}: {item.amount}</b>
          </div>
        ))}
      </div>
    </div>
  )
}
