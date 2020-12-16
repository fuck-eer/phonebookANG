import { EventEmitter } from '@angular/core';
import { contact } from './../contactclass.model';

// import { EventEmitter } from 'events';
// import { contact } from '../contactclass.model';
export class contactService{
    
    modalvisible=false;

    contacts:contact[]=[
        {fname:'Eric',lname:'Son', phno:'9965412755'},
        {fname:'Brain',lname:'Cena', phno:'3365124789'},
        {fname:'Bob',lname:'(the)Builder', phno:'8770605248'},
        {fname:'Munna',lname:'Tripathi', phno:'6589523419'},
        {fname:'Virat',lname:'Sharma', phno:'9309302415'},
        {fname:'Christiano',lname:'Aguero', phno:'5586694472'},
    ];
    
 
    sendsearched =new EventEmitter<contact[]>()
    
    public addcontact(con:contact){
        
        this.contacts.push(con);
        
    }

public findContact(name:string){
   
 let obj:contact[]=[];
// console.log(name);

    this.contacts.forEach(e=>{
        if(e.fname.includes(name)||e.lname.includes(name)||e.phno.includes(name)){
            obj.push(e);
           
        }
    })

    if(obj.length>0){
this.sendsearched.emit(obj);
    }else{
        alert('Contact Not found!!')
    }
}

public deleteItem(indx){
return this.contacts.splice(indx,1);

}



}