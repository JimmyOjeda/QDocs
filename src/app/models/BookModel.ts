export interface BookModel {
    volumeInfo: {
        title: string,
        subtitle: string,
        authors: Array<string>,
        publishedDate: string,
        language: string,
        pageCount: number
    }
}
