import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee()

  ngOnInit(): void {
  }

  constructor(private employeeservice: EmployeeService,
    private router: Router) { }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
  
  saveEmployee() {
    this.employeeservice.createEmployee(this.employee).subscribe((result) => {
      console.log(result);
      this.goToEmployeeList();
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
