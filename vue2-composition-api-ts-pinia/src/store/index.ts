import { defineStore } from 'pinia'

export type RootState = {
  name: string,
  count: number
}

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'Sample Vite + Pinia + TS App',
    count: 0
  } as RootState),
getters: {
  getName(): string {
    return this.name
  },
  getCount():number{
    return this.count
  }
}
})