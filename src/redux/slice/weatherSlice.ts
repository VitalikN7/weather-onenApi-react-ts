import { RootState } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// axios
import axios from "../../config/setupAxios";
// helpers
import { getDataIndex, getGurrentData } from "../../helper/currentTime";
// types
import { ApiTemperature, InitTemperature } from "../../types";

export const fetchTemperatureAnapa = createAsyncThunk('/fetchTemperature', async () => {
   const { data } = await axios.get('forecast?latitude=44.89&longitude=37.32&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&windspeed_unit=ms')
   return data as ApiTemperature
})

const initialState: InitTemperature = {
   temperature: null,
   statusRequest: 'loading',
   currentTime: getGurrentData(),
   indexApi: getDataIndex(),
}

export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
   },
   extraReducers(builder) {
      builder
         .addCase(fetchTemperatureAnapa.pending, (state) => {
            state.statusRequest = 'loading'
         })
         .addCase(fetchTemperatureAnapa.fulfilled, (state, action) => {
            state.statusRequest = 'loaded'
            if (!action.payload) {
               return alert('Не удалось получить данные')
            }
            state.temperature = action.payload
         })
         .addCase(fetchTemperatureAnapa.rejected, (state) => {
            state.statusRequest = 'error'
         })
   },
})

export const weatherReducer = weatherSlice.reducer

export const selectAllWeather = (state: RootState) => state.weather

// export const { currentIndex } = weatherSlice.actions