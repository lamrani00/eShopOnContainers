// la class qui représente l'article (dto)
export interface Article
{
  id: number;
  libelle: string; 
  serie: string;
  prix:number;
  available:boolean;
  categoriesId:number;
}