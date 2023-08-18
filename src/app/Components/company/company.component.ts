import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Company } from 'src/models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: Company[] | any;

  constructor(private http:HttpClient){
    this.fetchUsers()
  }

  fetchUsers():void{
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(res=>{
      if(res){
        this.dataSource = res
        console.log(res)
      }
    })
  }
}
