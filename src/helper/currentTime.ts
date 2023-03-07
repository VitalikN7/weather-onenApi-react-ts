import { DateTimeFormatOptions } from "../types";

export const getDataIndex = (): number => {
   let timeInMs = new Date();
   let options: DateTimeFormatOptions = { hour: 'numeric' };
   const newData = new Intl.DateTimeFormat('ru-RU', options).format(timeInMs)
   if (newData[0] === '0') {
      return +newData[1]
   } else {
      return +newData
   }
}

export const getGurrentData = (): string => {
   let timeInMs = new Date();
   let options: DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', };
   const newData = new Intl.DateTimeFormat('ru-RU', options).format(timeInMs)
   return newData
}