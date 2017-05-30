import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectButtonModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

import { QRCodeGeneratorService } from './../services/qr-code-generator.service';

@Component({
    templateUrl: 'app/views/qr-code-generator.html'
    selector: 'qrCodeGenerator'
})

export class QRCodeGeneratorComponent implements OnInit{  
    
    qrCodeOption : SelectItem[];
    selectedType : string ;
           
    constructor(private qrCodeService: QRCodeGeneratorService){
        this.qrCodeOption = [];
        this.qrCodeOption.push({label:'Text', value:'text'});
        this.qrCodeOption.push({label:'Email', value:'email'});
        this.qrCodeOption.push({label:'Link', value:'link'});
        this.qrCodeOption.push({label:'SMS', value:'sms'});
    }
}