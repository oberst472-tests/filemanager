const url = 'https://demo-fklvc3a-d3spspfn365bc.eu-5.platformsh.site/api'

export const apiGetFolders = async function() {
    try {
        return await fetch(`${url}/folders?user=1`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiGetFolderById = async function(id: string | number) {
    try {
        return await fetch(`${url}/folders?folder=${id}&user=1`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiAddNewFolder = async function({parentId, name}: { parentId: number, name: string }) {
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

export const apiGetTags = async function() {
    try {
        return await fetch(`${url}/tags`)
    } catch (e) {
        console.log(e);
        return false
    }
}

export const apiAddTag = async function({tags, type, folderId}: any) {
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
