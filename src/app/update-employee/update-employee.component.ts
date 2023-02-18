import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeservice: EmployeeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.id = this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe((result) => {
      this.employee = result;
    })
  }

  onSubmit() {
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe((result) => {
      console.log(result);
      this.goToEmployeeList();
    })
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
