import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HolyQuranService } from './../services/holy-quran.service';
import { SpinnerService } from './../services/SpinnerService';

@Component({
    templateUrl: 'app/views/holyQuran.html'
    selector: 'holyQuran'
})

export class HolyQuranComponent implements OnInit{     
    
    displayBy : string = "surah";
    index : number = 1 ;    
    ayahsList : object[] ;
    currentSurah : string = "" ;
    surahName : string = "";
           
    constructor(private holyQuranService: HolyQuranService, public spinner: SpinnerService){
        
    }
    
    ngOnInit(){
        this.getHolyQuranByTypeEn();
    }
    
    getHolyQuranByTypeEn(){
        if(this.index < 1){
            this.index = 1 ;
        }
        this.spinner.start();
        this.holyQuranService.displayHolyQuranByTypeEn(this.displayBy, this.index).subscribe(
            dataR => {
                this.spinner.stop();
                console.log(dataR); 
                this.ayahsList = dataR.data.ayahs;
                if(this.displayBy == "surah"){
                    this.surahName = dataR.data.englishName;
                }        
                console.log(this.ayahsList);                           
            },
            error => {  
                this.spinner.stop();              
                console.log('Exception');                
            });
    
    }
    
    getHolyQuranByRadioClicked(){
        this.index = 1 ;
        if(this.displayBy == "surah"){            
            this.displayBy = "juz"
        }
        else{            
            this.displayBy = "surah";
        }
        this.getHolyQuranByTypeEn();
    }
    
    onNextClicked(){
        this.index = this.index + 1;
        this.getHolyQuranByTypeEn();
    }
    
    onPreviousClicked(){
        if(this.index > 1){
           this.index = this.index - 1 ;
           this.getHolyQuranByTypeEn();
        }
    }
}
