import { contact } from './Shared/contactclass.model';
import { contactService } from './Shared/Services/Contactserv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[contactService]
})
export class AppComponent implements OnInit {
  


constructor(private conserv:contactService){

}

ngOnInit(){


}

onCallmodal(){
  this.conserv.modalvisible=true;
}

getmodal(){
  return this.conserv.modalvisible
}


}
