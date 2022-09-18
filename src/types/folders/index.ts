import { TagType } from '../tags';
export type TypeFolder = {
    id: number,
    name: string,
    type?: string,
    children?: (TypeFolder | TypeImage)[]
}
export type TypeImage = {
    filename: string,
    id: number,
    short: {
        name: string
    },
    type: string
}
export type TypeItem = {
    id: number,
    name: string,
    tags: TagType[]
    type: string
}

export type TypeFiles = {
    folders?: TypeFolder[],
    images?: TypeImage[],
}

export type TypeItems = {
    parentId: number,
    children: (TypeFolder | TypeImage)[]
}

