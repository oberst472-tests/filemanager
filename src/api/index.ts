import { FileType } from '../types/files';
import folder from '../components/icons/folder/index.vue';

const url = 'http://folders.tw1.ru/api'

export const apiGetFolders = async function () {
    try {
        return await fetch(`${url}/folders?user=1`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiGetFolderById = async function (id: string | number) {
    try {
        return await fetch(`${url}/folders?folder=${id}&user=1`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiAddNewFolder = async function ({parentId, name}: { parentId: number, name: string }) {
    try {
        const parent = parentId > 0 ? `&parent=${parentId}` : ''
        return await fetch(`${url}/folder/add?name=${name}${parent}&user=1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiGetTags = async function () {
    try {
        return await fetch(`${url}/tags`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiAddTag = async function ({tags, type, folderId}: any) {
    const tagsStr = `tags[]=${tags.join('tags[]=').split('tags').join('&tags')}`
    try {
        return await fetch(`${url}/tag/add?type=${type[0].toUpperCase() + type.substring(1)}&entity_id=${folderId}&${tagsStr}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiSendFiles = async function (items: FileType[], folderId: number) {
    try {
        const formData: any = new FormData();
        for (let item of items) {
            delete item.id
            delete item.preview
            formData.append('file[]', item as FileType)
            formData.append('folder', folderId);
        }

        return await fetch(`${url}/image/upload`, {
            method: 'POST',
            body: formData
        })
    } catch (e) {
        console.log(e);
        return false
    }
}
