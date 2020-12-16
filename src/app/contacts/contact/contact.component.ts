import { contact } from './../../Shared/contactclass.model';
import { Component, Input, OnInit } from '@angular/core';
import { contactService } from 'src/app/Shared/Services/Contactserv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

@Input() contact:contact
@Input() indx:number
  constructor(private conserv:contactService) { }

  ngOnInit(): void {
  }

  ondelete(){
    let con:contact;
    con=this.conserv.deleteItem(this.indx)[0]
  //  console.log(this.indx);
   alert("Contact details of "+con.fname +" "+ con.lname+ " is successfully deleted!")
    
      }


}
