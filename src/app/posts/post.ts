export interface Post{
    id: number;
    titulo: string;
    resumo: string;
    blog: {
        url: string;
    }
}