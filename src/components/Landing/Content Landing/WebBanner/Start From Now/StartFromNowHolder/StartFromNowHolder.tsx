import React from 'react'
import style from './StartFromNowHolder.module.css'
import { Text } from '../StartFromNowItems/Text'
import { Bottun } from '../StartFromNowItems/Bottun'

const StartFromNowHolder = () => {
  return (
    <>
        <div className={style.startFromNow}>
          <Text />
          <Bottun />
        </div>
    </>
  )
}

export {StartFromNowHolder}