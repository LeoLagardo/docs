import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  documentListBody = 
  {
    "Tenant_ID":"",
    "limit":"10",
    "pageNo":"1",
    "order":"-1",
    "search":"",
    "fieldName":"",
    "startDate":"2020-03-01T18:30:00.000Z",
    "endDate":"2020-03-13T18:30:00.000Z",
    "status":""
  }

  documentList = [];
  data: any;
  picker: any;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    const body = JSON.stringify(this.documentListBody);
    this.us.documentList(body).subscribe(
      data => {
        this.data = data;
        this.documentList = this.data.data;
      }
    )
  }

  filter(key) {
    if(key.length > 0) {
      this.documentList = this.data.data.filter(data => {
        return data.Document_ID.Document_ID.toLowerCase().indexOf(key.toLowerCase()) > -1;
      });
    }
  }

}
