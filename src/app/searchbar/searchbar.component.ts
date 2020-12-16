import { contact } from './../Shared/contactclass.model';
import { contactService } from './../Shared/Services/Contactserv.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

@ViewChild('search') typed:ElementRef


  constructor(private conser:contactService) { }

  ngOnInit(): void {
  }

  onSearch(){
    
    // console.log(this.typed.nativeElement.value);

  this.conser.findContact(this.typed.nativeElement.value)


    
  }

}
