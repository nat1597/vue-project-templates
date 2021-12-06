import { defineStore } from 'pinia'

export type RootState = {
  name: string
}

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'Sample Vite + Pinia + TS App',
  } as RootState),
getters: {
  getName(): string {
    return this.name
  }
}
})