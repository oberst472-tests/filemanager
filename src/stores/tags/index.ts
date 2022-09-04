import { defineStore } from 'pinia'
import { apiAddTag, apiGetTags } from '../../api';

export const useTagsStore = defineStore('tags', {
    state: () => {
        return {
            tags: [] as any,
        }
    },
    actions: {
        async stGetTags() {
            try {
                const res: any = await apiGetTags()
                const data = await res?.json()
                this.tags = data
                console.log(data);
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
                console.log(data);
                return true
            } catch (e) {
                console.log(566);
                console.log(e);

                return false
            }
        },
    },
})
