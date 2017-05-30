import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    templateUrl: 'app/views/contributors.html'
    selector: 'contributors'
})

export class ContributorsComponent implements OnInit{
        
    profileOnePicture : string ;
    profileTwoPicture : string ;
    
    constructor(){
        this.profileOnePicture = "./../app/resources/images/images.png";
        this.profileTwoPicture = "./../app/resources/images/mohsin.png";
    }
    
}
