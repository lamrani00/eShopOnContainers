import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../model/article.Model';


@Injectable({ providedIn: 'root' })
export class ArticlesService {
    constructor(private http: HttpClient) { }
// creation une fonction qui retourne une liste d'article
    getAllArticles():Observable<Article[]>{
        // le lien de serveur
        let host=environment.host
        // la requette
        return this.http.get<Article[]>(host+"/articles");
    }

    getSelectedArticles():Observable<Article[]>{
        // le lien de serveur
        let host=environment.host
        // la requette
        return this.http.get<Article[]>(host+"/articles?selected=true");
    }

    getSAvailableelecterArticles():Observable<Article[]>{
        // le lien de serveur
        let host=environment.host
        // la requette
        return this.http.get<Article[]>(host+"/articles?available=true");
    }
}