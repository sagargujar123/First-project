import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  private baseUrl = "http://localhost:3000/employee"
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, employee)
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
