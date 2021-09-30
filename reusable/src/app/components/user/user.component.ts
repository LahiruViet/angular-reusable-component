import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  gridData!: any[];
  columnData = [
    { feild: 'id', header: 'ID' },
    { feild: 'name', header: 'Name' },
    { feild: 'email', header: 'Email' },
    { feild: 'phone', header: 'Phone' },
    { feild: 'website', header: 'Website' }
  ]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadGrid()
  }

  loadGrid() {

    this.userService.getUsers().subscribe(data => {
      debugger
      this.gridData = data as any[]
    })
  }

}
