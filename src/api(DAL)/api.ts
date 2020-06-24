import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_BASE_URL
})

type Counter = {
    value: number
}

type CounterSettings = {
    maxValue: number,
    startValue: number
}

export const counterServiceAPI = {
    getCounter() {
        return instance.get<Counter>("/counter").then(res => res.data)
    },
    updateCounter(value: number) {
        return instance.put<Counter>("/counter", {value: value})
    },
    getCounterSettings() {
        return instance.get<CounterSettings>("/counter-settings").then(res => res.data)
    },
    updateCounterMaxValue(value: number) {
        return instance.patch<CounterSettings>("/counter-settings", {maxValue: value})
    },
    updateCounterStartValue(value: number) {
        return instance.patch<CounterSettings>("/counter-settings", {startValue: value})
    }
}


// @ts-ignore
window.counterServiceAPI = counterServiceAPI
