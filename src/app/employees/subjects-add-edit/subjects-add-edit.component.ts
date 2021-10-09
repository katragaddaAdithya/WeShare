import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects-add-edit',
  templateUrl: './subjects-add-edit.component.html',
  styleUrls: ['./subjects-add-edit.component.css']
})
export class SubjectsAddEditComponent implements OnInit {

  constructor(public service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService ) { }

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
