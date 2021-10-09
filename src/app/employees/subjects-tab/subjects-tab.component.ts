import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
//import {SubjectsDataComponent } from 'src/app/employees/subjects-data/subjects-data.component';
@Component({
  selector: 'app-subjects-tab',
  templateUrl: './subjects-tab.component.html',
  styleUrls: ['./subjects-tab.component.css']
})

export class SubjectsTabComponent implements OnInit {
  list!: Employee[];
  constructor(public service: EmployeeService,
    public firestore: AngularFirestore,
    private toastr: ToastrService,
   // public subjectdata: SubjectsDataComponent
    ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        const data =item.payload.doc.data() as Employee;
        data.id = item.payload.doc.id;
      
        return {
         ...data
        } as Employee
      })
    });
  }

 

  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
    //this.subjectdata.list = this.service.formData as Employee;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted successfully');
    }
  }

}
