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
   apparent_temperature: number | undefined,
   winddirection: number | undefined,
}

export const ThisDayInfo = ({ pressure, temperature, precipitation, wind, apparent_temperature, winddirection }: ThisDayInfoProps) => {

   const [directionwind, setDirectionWind] = useState('')

   useEffect(() => {
      if (winddirection) {
         if (winddirection >= 337.5 && winddirection <= 360 || winddirection <= 22.5) {
            setDirectionWind('север')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('северо-восток')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('восток')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('юго-восток')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('юг')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('юг-запад')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('запад')
         }
         if (winddirection <= 67.5 && winddirection >= 22.5) {
            setDirectionWind('северо-запад')
         }
      }
   }, [winddirection])

   return (
      <div className={styles.block__two}>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'temperature'} />
            <p>Температура</p>
            {temperature && apparent_temperature && <p>{`${Math.floor(temperature)} °C - ощущается как ${Math.floor(apparent_temperature)} °C`}</p>}
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'pressure'} />
            <p>Давление</p>
            {pressure && <p>{`${Math.floor(pressure) * 0.75} мм ртутного столба`}</p>}
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'precipitation'} />
            <p>Осадки</p>
            <p>{`${precipitation} Без осадков`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'wind'} />
            <p>Ветер</p>
            {wind && <p>{`Скорость ${Math.floor(wind)} м/с ${directionwind}`}</p>}
         </div>
         <img src={cloud} alt="cloud" />
      </div>
   )
}