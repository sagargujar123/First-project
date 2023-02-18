import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeservice: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeservice.getEmployeeList().subscribe((result) => {
      console.log(result);
      this.employees = result;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['/update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeservice.deleteEmployee(id).subscribe((result) => {
      console.log(result);
      this.getEmployees();
    })
  }

  employeeDetails(id: number) {
    this.router.navigate(['/employee-details', id]);
  }
}
