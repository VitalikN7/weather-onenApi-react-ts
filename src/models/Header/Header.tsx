import React, { useState } from 'react'
import SelectorSvgOther from './../../components/SelectorSvg/SelectorSvgOther';
import Select from 'react-select';
import styles from './header.module.scss'

interface OptionsCity {
   value: string,
   label: string,
}

export const Header = () => {

   const [selectedOption, setSelectedOption] = useState(null);

   const options: OptionsCity[] = [
      { value: 'city-1', label: 'Анапа' },
      { value: 'city-2', label: 'Краснодар' },
      { value: 'city-3', label: 'Архыз' },
      { value: 'city-4', label: 'Сочи' },
      { value: 'city-5', label: 'Адлер' },
      { value: 'city-6', label: 'Новороссийск' },
      { value: 'city-7', label: 'Тимошевск' },
      { value: 'city-8', label: 'Гиленджик' },
      { value: 'city-9', label: 'Домбай' },
   ];

   return (
      <header>
         <div className={styles.wrapper}>
            <SelectorSvgOther className={styles.svg} svgName='logo' />
            <h1 className={styles.wrapper__logo}>React weather</h1>
         </div>
         <div className={styles.wrapper}>
            <SelectorSvgOther svgName={'theme'} />
            <Select
               className={styles['custom-select-container']}
               classNamePrefix='custom-select'
               // defaultValue={selectedOption}
               defaultValue={options[0]}
               // onChange={setSelectedOption}
               options={options}
            />
         </div>
      </header>
   )
}