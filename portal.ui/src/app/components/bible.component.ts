import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RadioButtonModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';

import { BibleService } from './../services/bible.service';

@Component({
    templateUrl: 'app/views/bible.html'
    selector: 'bible'
})

export class BibleComponent implements OnInit{
        
    bibleType : string = "Old Testment" ;
    books : object[] ;
    bookName: string = "No Book Selected";
    chapter : number = 0;
    chapterNum : number = 0;
    description : string ;
        
    constructor(private bibleService: BibleService){
        
    }
    
    ngOnInit(){
        this.bibleService.getBooks(this.bibleType).subscribe(
            data => {
                console.log(data);
                this.books = data ;                
            },
            error => {                
                console.log('Exception');
            });
    }
    
    getBooks(evt){
        console.log("Get Books method called");
        if(this.bibleType == "New Testment")
            this.bibleType = "Old Testment";
        else
            this.bibleType = "New Testment" ;
        this.bibleService.getBooks(this.bibleType).subscribe(
            data => {
                console.log(data);
                this.books = data ;                
            },
            error => {                
                console.log('Exception');
            });  
    }
    
    getChapters(bookName : string, chapter : string){
        console.log("Book Name " + bookName + " Chapter" + chapter);
        this.bookName = bookName ;
        this.chapter = chapter ;
        this.chapterNum = chapter ;
        this.bibleService.getBookChapter(this.bookName, this.chapter).subscribe(
            data => {
                console.log(data);
                this.description = data.Output ;                
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    getPreviousChapter(){
        if(this.chapter > 1){
            this.chapter = this.chapter - 1 ;            
            this.bibleService.getBookChapter(this.bookName, this.chapter).subscribe(
                data => {
                    console.log(data);
                    this.description = data.Output ; 
                    this.chapterNum = this.chapter ;                
                },
                error => {                
                    console.log('Exception');
                });
            }
    }
    
    getNextChapter(){
        this.chapter = this.chapter + 1 ;
        this.bibleService.getBookChapter(this.bookName, this.chapter).subscribe(
            data => {
                console.log(data);
                this.description = data.Output ;  
                this.chapterNum = this.chapter ;            
            },
            error => {                
                console.log('Exception');
            });
    }
    getChapterByNumber(){
        if(this.chapterNum > 0){
            this.chapter = this.chapterNum ;
            this.bibleService.getBookChapter(this.bookName, this.chapter).subscribe(
            data => {
                console.log(data);
                this.description = data.Output ;                          
            },
            error => {                
                console.log('Exception');
            });
        }  
    }
}