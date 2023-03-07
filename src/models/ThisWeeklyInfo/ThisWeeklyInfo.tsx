import { useState } from 'react'
// animation
import { XyzTransitionGroup } from '@animxyz/react'
import "@animxyz/core";
// svgComponents
import SelectorSvgTheWeekly from '../../components/SelectorSvg/SelectorSvgTheWeekly';
// styles
import styles from './thisWeeklyInfo.module.scss'


export const ThisWeeklyInfo = () => {

   const [data] = useState([1, 2, 3, 4, 5, 6, 7])

   return (
      <footer>
         <XyzTransitionGroup
            appear
            className={styles['example-grid']}
            xyz="fade small out-down out-rotate-right appear-stagger">
            {data.map(el => (
               <div key={el} className={`${styles.block} ${styles.square}`}>
                  <h3>Сегодня</h3>
                  <p>28 авг</p>
                  <SelectorSvgTheWeekly svgName={'cloudy_cloud_hail'} />
                  <h3>+18°</h3>
                  <p>+15°</p>
                  <p>Облачно</p>
               </div>
            ))}
         </XyzTransitionGroup>
      </footer>
   )
}