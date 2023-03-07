import React from 'react'
import styles from './container.module.scss'

interface ContainerChildren {
   children: React.ReactNode
}

export const Container = ({ children }: ContainerChildren) => {
   return (
      <div className={styles.container}>
         {children}
      </div>
   )
}