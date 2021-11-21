import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Article } from 'src/app/model/article.Model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  articles?:Article[] |null=null;
  //   articles?:Observable<Article[]> |null=null;
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {}

  OngetAllArticles() {
  
  this.articlesService.getAllArticles().subscribe (
    data=>
     {this.articles=data;}   // récuperation des données
     , err=>
     {console.log(err);} // afficher l'exception dans le console
      );
 


      
  }

/*
  OngetArticlesDispo(){
    this.articlesService.getAllArticles()
    .subscribe(data=>
      { this.articles$=data}
      , err=>{console.log(err)}
      );
  }
*/
}
