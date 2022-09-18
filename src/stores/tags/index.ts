import { defineStore } from 'pinia'
import { apiAddTag, apiGetTags } from '../../api';

export const useTagsStore = defineStore('tags', {
    state: () => {
        return {
            tags: [] as any,
            isLoading: false
        }
    },
    actions: {
        async stGetTags() {
            try {
                const res: any = await apiGetTags()
                const data = await res?.json()
                this.tags = data
                return true
            } catch (e) {
                console.log(e);

                return false
            }
        },
        async stAddTag({tags, type, folderId}: any) {
            try {
                const res: any = await apiAddTag({tags, type, folderId})
                const data = await res.json()
                return data?.name ? data : false
            } catch (e) {
                console.log(e);

                return false
            }
        },
    },
})
