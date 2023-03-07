import { useState, useEffect } from 'react'
// svgComponents
import SelectorSvgOther from '../../components/SelectorSvg/SelectorSvgOther';
// styles
import styles from './thisDayInfo.module.scss'
// assets
import cloud from '../../assets/img/cloud.png'

interface ThisDayInfoProps {
   pressure: number | undefined
}

export const ThisDayInfo = ({ pressure }: ThisDayInfoProps) => {

   const [data, setData] = useState([
      { svgName: 'temperature', text: 'Температура', },
      { svgName: 'pressure', text: 'Давление', value: pressure, },
      { svgName: 'precipitation', text: 'Осадки', },
      { svgName: 'wind', text: 'Ветер', },
   ])

   // useEffect(() => {
   //    setData(...data, [data[1].value = pressure])
   // }, [pressure])

   // console.log('data: ', data);

   return (
      <div className={styles.block__two}>
         {/* {data.map(({ svgName, text, value }) => (
            <div key={svgName} className={styles.block__two__inner}>
               < SelectorSvgOther svgName={svgName} />
               <p>{text}</p>
               <p>{`${value} мм ртутного столба`}</p>
            </div>
         ))} */}
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'temperature'} />
            <p>Температура</p>
            <p>{`${null} 20° - ощущается как 17°`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'pressure'} />
            <p>Давление</p>
            <p>{`${pressure} мм ртутного столба`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'precipitation'} />
            <p>Осадки</p>
            <p>{`${null} Без осадков`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'wind'} />
            <p>Ветер</p>
            <p>{`${null} 3 м/с юго-запад - легкий ветер`}</p>
         </div>
         <img src={cloud} alt="cloud" />
      </div>
   )
}