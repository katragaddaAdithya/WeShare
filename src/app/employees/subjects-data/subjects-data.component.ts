import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';




@Component({
  selector: 'app-subjects-data',
  templateUrl: './subjects-data.component.html',
  styleUrls: ['./subjects-data.component.css']
})
export class SubjectsDataComponent implements OnInit {
 list!: any;
 test = 'div_no_Display';
  constructor(public service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
    
    ) { }
deletebuton ='div_no_Display';
  ngOnInit(): void {
    
    this.resetForm();

  }
 

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      subject_name: '',
      subjet_notes: '',
      subject_info: '',
    } 
    this.list = this.service.formData as Employee;
    
 
    }
  
    onEdit(emp: Employee) {
      console.error(this.service.formData.subjet_notes);
      this.service.formData = Object.assign({}, emp);
      
    }
  
    onDelete(id: string) {
      if (confirm("Are you sure to delete this record?")) {
        this.firestore.doc('employees/' + id).delete();
        this.resetForm();
        this.toastr.warning('Deleted successfully');
      }
    }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == '')
      this.firestore.collection('employees').add(data);
    else
      this.firestore.doc('employees/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully');
}
}
