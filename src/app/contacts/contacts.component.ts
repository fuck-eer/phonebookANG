import { contact } from './../Shared/contactclass.model';
import { contactService } from './../Shared/Services/Contactserv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  allcontacts:contact[]

  constructor(private conserv:contactService) { }

  ngOnInit(): void {
this.allcontacts=this.conserv.contacts;

this.conserv.sendsearched.subscribe(e=>{
  this.allcontacts=e;
})

  }

  sortingbynames(){
    this.conserv.contacts.sort((a, b) => {
      let fa = a.fname.toLowerCase(),
      fb = b.fname.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
  });
console.log(this.allcontacts);


  }


}
