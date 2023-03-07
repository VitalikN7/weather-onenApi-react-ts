import React from 'react'
// svgComponents
import SelectorSvgMain from '../../components/SelectorSvg/SelectorSvgMain';
// styles
import styles from './thisDay.module.scss'

interface ThisDayProps {
   temperature: number | undefined,
   data: string | undefined,
}

export const ThisDay = ({ temperature, data }: ThisDayProps) => {
   return (
      (temperature && data
         ?
         (<div className={styles.block__one}>
            <div className={styles.block__one__inner}>
               <div>
                  <h1>{`${Math.floor(temperature)}°`}</h1>
                  <h3>Сегодня</h3>
               </div>
               <div className={styles.block__one__inner__svg}>
                  <SelectorSvgMain svgName={'sunny'} />
               </div>
            </div>
            <p>{`Время: ${data.split(',')[2]}`}</p>
            <p>Город: Анапа</p>
         </div>)
         :
         (
            <h1>hi</h1>
         ))
   )
}