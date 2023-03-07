import { useEffect, useState } from 'react'
// models
import { ThisDay } from '../../models/ThisDay/ThisDay'
import { ThisDayInfo } from '../../models/ThisDayInfo/ThisDayInfo'
import { ThisWeeklyInfo } from "../../models/ThisWeeklyInfo/ThisWeeklyInfo";
import { Header } from "../../models/Header/Header";
// copmponents
import { Container } from "../../components/Container/Container";
// redux
import { useAppDispatch, useAppSelector } from "./../../redux/redux-hooks";
import { fetchTemperatureAnapa, selectAllWeather } from '../../redux/slice/weatherSlice'
// types
import { InitTemperature } from "./../../types";

export const Home = () => {

   const dispath = useAppDispatch()

   const isTemperature: InitTemperature = useAppSelector(selectAllWeather)
   // console.log('isTemperature: ', isTemperature);

   const [time, setTime] = useState('')

   useEffect(() => {
      dispath(fetchTemperatureAnapa())
   }, [dispath])

   return (
      <Container>
         <Header />
         <main>
            <ThisDay
               temperature={isTemperature?.temperature?.hourly?.temperature_2m[isTemperature.indexApi]}
               data={isTemperature?.currentTime}
            />
            <ThisDayInfo
               pressure={isTemperature?.temperature?.hourly?.surface_pressure[isTemperature.indexApi]}
            />
         </main >
         <ThisWeeklyInfo />
      </Container>
   )
}