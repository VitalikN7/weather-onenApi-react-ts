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

export const ThisDayInfo = ({ pressure, temperature, apparent_temperature, precipitation, wind, winddirection }: ThisDayInfoProps) => {

   const [directionWind, setDirectionWind] = useState('')
   const [speedWind, setSpeedWind] = useState('')
   const [precipitationInterest, setPrecipitationInterest] = useState('')

   useEffect(() => {
      if (winddirection !== undefined) {
         if ((winddirection >= 337.5 && winddirection <= 360) || (winddirection <= 22.5)) {
            setDirectionWind('северный')
         }
         if (winddirection <= 67.5 && winddirection > 22.5) {
            setDirectionWind('северо-восточный')
         }
         if (winddirection <= 112.5 && winddirection > 67.5) {
            setDirectionWind('восточный')
         }
         if (winddirection <= 157.5 && winddirection > 112.5) {
            setDirectionWind('юго-восточный')
         }
         if (winddirection <= 202.5 && winddirection > 157.5) {
            setDirectionWind('южный')
         }
         if (winddirection <= 247.5 && winddirection > 202.5) {
            setDirectionWind('юго-западный')
         }
         if (winddirection <= 292.5 && winddirection > 247.5) {
            setDirectionWind('западный')
         }
         if (winddirection <= 337.5 && winddirection > 292.5) {
            setDirectionWind('северо-западый')
         }
      }
      if (wind !== undefined) {
         if (Math.floor(wind) <= 5) {
            setSpeedWind('cлабый')
         }
         if (Math.floor(wind) <= 14 && Math.floor(wind) > 6) {
            setSpeedWind('умеренный')
         }
         if (Math.floor(wind) <= 24 && Math.floor(wind) > 15) {
            setSpeedWind('сильный')
         }
         if (Math.floor(wind) <= 32 && Math.floor(wind) > 25) {
            setSpeedWind('очень сильный')
         }
         if (Math.floor(wind) >= 33) {
            setSpeedWind('ураганный')
         }
      }
      if (precipitation !== undefined) {
         if (precipitation <= 5) {
            setPrecipitationInterest('без осадков')
         }
         if (precipitation <= 30 && precipitation > 6) {
            setPrecipitationInterest('мало вероятно')
         }
         if (precipitation <= 60 && precipitation > 31) {
            setPrecipitationInterest('возможно, можно взять зотник')
         }
         if (precipitation <= 80 && precipitation > 61) {
            setPrecipitationInterest('осадки почти навердика зонтик точно нужен')
         }
         if (precipitation >= 81) {
            setPrecipitationInterest('одназначно осадки')
         }
      }
   }, [winddirection, wind, precipitation])

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
            <p>{`${precipitation} % - ${precipitationInterest}`}</p>
         </div>
         <div className={styles.block__two__inner}>
            < SelectorSvgOther svgName={'wind'} />
            <p>Ветер</p>
            {wind && <p>{`Скорость ${Math.floor(wind)} м/с ${directionWind} - ${speedWind}`}</p>}
         </div>
         <img src={cloud} alt="cloud" />
      </div>
   )
}