import { contact } from './../Shared/contactclass.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { contactService } from '../Shared/Services/Contactserv.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  @ViewChild('fname') firstname:ElementRef
  @ViewChild('lname') lastname:ElementRef
  @ViewChild('phno') phoneno:ElementRef

  
  
  constructor(public conserv:contactService) { }

  ngOnInit(): void {
  }
  
  onhidemodal(){
    this.conserv.modalvisible=false;
  }
  
  onAddContact(){
    
   let conta={
fname:this.firstname.nativeElement.value,
lname:this.lastname.nativeElement.value,
phno:this.phoneno.nativeElement.value
}

this.conserv.addcontact(conta);
this.conserv.modalvisible=false;

}


}
