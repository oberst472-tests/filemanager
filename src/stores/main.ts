import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
    state: () => {
        return {
           isLoading: false
        }
    },
    actions: {
        changeLoading(val = true) {
            this.isLoading = val
        }
    },
})
