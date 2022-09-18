import { defineStore } from 'pinia'
import { apiSendFiles } from '../../api';
import { FileType } from '../../types/files';

export const useFilesStore = defineStore('files', {
    state: () => {
        return {
            files: [],
            isLoading: false,
            openedFolder: {
                id: 0,
                name: ''
            },
            activeFileUrl: ''
        }
    },
    actions: {
        async stSendFiles(items: FileType[], folderId: number) {
            try {
                const res: any = await apiSendFiles(items, folderId)
                const data = await res?.json()
                return Boolean(data?.files?.length)
            } catch (e) {
                console.log(e);
                return false
            }
        },
    },
})
