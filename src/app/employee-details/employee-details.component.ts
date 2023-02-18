import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;

  constructor(private employeeservice: EmployeeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.id = this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe((result) => {
      this.employee = result;
    });
  }

}
