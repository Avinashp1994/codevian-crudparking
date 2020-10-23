import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  employee = [
    { ownername: 'Avinash', mobile: '8830752282',vehiclenumber: 'MH12JY6578',vehiclename:'Two Wheeler',
      parkblog: '123', parkdate: '23/10/2020', parktime:'12:00'},
  ];

  model: any = {};

  addEmployee() {
    console.log(this.model);
    this.employee.push(this.model);
    this.model = {};
   


  }

  deleteEmployee(i) {
    this.employee.splice(i, 1);
    
  }

  myvalue;
  model2: any = {};

  editEmployee(i) {
    this.model2.ownername = this.employee[i].ownername;
    this.model2.mobile = this.employee[i].mobile;
    this.model2.vehiclenumber = this.employee[i].vehiclenumber;
    this.model2.vehiclename = this.employee[i].vehiclename;
    this.model2.parkblog = this.employee[i].parkblog;
    this.model2.parkdate = this.employee[i].parkdate;
    this.model2.parktime = this.employee[i].parktime;
    this.myvalue = i;
  }

  updateEmployee() {
    let k = this.myvalue;

    for (let i = 0; i < this.employee.length; i++) {
      if (i == k) {
        this.employee[i] = this.model2;
        this.model2 = {};
        
      }
    }
  }


}
