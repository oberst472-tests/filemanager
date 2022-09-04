import { defineStore } from 'pinia'
import { apiGetFolders, apiAddNewFolder, apiGetFolderById } from '../../api';
import { TypeFiles, TypeFolder, TypeImage, TypeItems } from '../../types/folders';

export const useFoldersStore = defineStore('folders', {
    state: () => {
        return {
            folders: [] as TypeFolder[],
            items: [] as TypeItems[],
            activeFolderId: 0,
            breadcrumbs: [] as any,
            tags: [] as any,
            index: 0
        }
    },
    actions: {
        async stGetFolders() {
            try {
                const res: any = await apiGetFolders()
                const data = await res?.json()
                const {folders, images} = data
                const modFolders = folders.length ? folders.map((item: any) => {
                    return {...item, type: 'folder'}
                }) : []
                this.folders = modFolders || []
                this.items.push({
                    parentId: 0,
                    children: modFolders
                } as TypeItems)
                return true
            } catch (e) {
                console.log(e);
                return false
            }
        },
        async stGetFolderById({id, name, index}: { id: string | number, name: string, index: number }) {
            try {
                const res: any = await apiGetFolderById(id)
                const data: TypeFiles = await res?.json()
                this.setIndex(index)
                console.log(this.breadcrumbs);
                let arr: (TypeFolder | TypeImage)[] = []
                for (let key in data as TypeFiles) {
                    // @ts-ignore
                    data[key].forEach((item: TypeFolder | TypeImage) => {
                        item.type = key.substring(0, key.length - 1)
                        arr.push(item)
                    })
                }

                this.breadcrumbs = this.breadcrumbs.slice(0, this.index)
                this.breadcrumbs.push({name, id})

                const newArr = this.items.slice(0, this.index + 1)
                newArr.push({parentId: id, children: arr} as TypeItems)

                this.items = newArr
                return true
            } catch (e) {
                console.log(e);

                return false
            }
        },
        async stAddNewFolder({parentId, name}: { parentId: number, name: string }) {
            console.log(1988);
            try {
                const res: any = await apiAddNewFolder({parentId, name})
                const data = await res?.json()
                console.log(data);
                const ind: any = this.items.findIndex(item => item.parentId === parentId)
                console.log(ind);
                console.log(67);
                if (!ind) return false
                this.addNewItemAfterAdding(ind, data)
                return true
            } catch (e) {
                console.log(e);

                return false
            }
        },
        setIndex(val: number) {
            this.index = val
        },
        addNewItemAfterAdding(ind: number, data: TypeFolder) {
            data.type = 'folder'
            this.items[ind].children.push(data)
        }
    },
})
