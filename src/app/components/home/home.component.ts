import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { Employees } from 'src/employees';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myTable: any;
  displayedColumns:any[]=["transactionId", "balancePayment", "customerName", "customerPhone", "deliveryAddress"];
  dataSource = new MatTableDataSource();
  myEmployees: Employees[] = [];
  constructor(private fetchData: FetchDataService) {
    this.fetchData.getData().subscribe((myData)=>{
      this.myEmployees = myData.dist;
      this.dataSource.data = this.myEmployees;
    })
   }
  ngOnInit(): void {
  }
}
