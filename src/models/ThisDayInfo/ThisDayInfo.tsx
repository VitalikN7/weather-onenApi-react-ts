import { useState, useEffect } from 'react'
// svgComponents
import SelectorSvgOther from '../../components/SelectorSvg/SelectorSvgOther';
// styles
import styles from './thisDayInfo.module.scss'
// assets
import cloud from '../../assets/img/cloud.png'

interface ThisDayInfoProps {
   pressure: number | undefined,
   temperature: number | undefined,
   precipitation: number | undefined,
   wind: number | undefined,
}

// interface ThisDayInfoOptions {
//    svgName: string,
//    text: string,
//    value: null | number | string | undefined,
// }

export const ThisDayInfo = ({ pressure, temperature, precipitation, wind }: ThisDayInfoProps) => {

   // const [data, setData] = useState([
   //    { svgName: 'temperature', text: 'Температура', value: null, },
   //    { svgName: 'pressure', text: 'Давление', value: null, },
   //    { svgName: 'precipitation', text: 'Осадки', value: null, },
   //    { svgName: 'wind', text: 'Ветер', value: null, },
   // ])

   // useEffect(() => {
   //    const newData = [...data]
   //    newData.forEach((el: ThisDayInfoOptions, i) => {
   //       if (i === 0) {
   //          el.value = temperature
   //       }
   //       if (i === 1) {
   //          el.value = pressure
   //       }
   //       if (i === 2) {
   //          el.value = precipitation
   //       }
   //       if (i === 3) {
   //          el.value = wind
   //       }
   //    })
   //    setData(newData)
   // }, [pressure, temperature, precipitation, wind])

   return (
      <div className={styles.block__two}>
         {/* {data.map(({ svgName, text, value }, i) => (
            <div key={svgName} className={styles.block__two__inner}>
               < SelectorSvgOther svgName={svgName} />
               <p>{text}</p>
               <p>{`${value} мм ртутного столба`}</p>
            </div>
         ))} */}
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'temperature'} />
            <p>Температура</p>
            <p>{`${temperature} 20° - ощущается как 17°`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'pressure'} />
            <p>Давление</p>
            <p>{`${pressure} мм ртутного столба`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'precipitation'} />
            <p>Осадки</p>
            <p>{`${precipitation} Без осадков`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'wind'} />
            <p>Ветер</p>
            <p>{`${wind} 3 м/с юго-запад - легкий ветер`}</p>
         </div>
         <img src={cloud} alt="cloud" />
      </div>
   )
}