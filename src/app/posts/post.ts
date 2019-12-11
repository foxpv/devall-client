export interface Post{
    id: number;
    titulo: string;
    resumo: string;
    url: string;
    blog: {
        url: string;
    }
}