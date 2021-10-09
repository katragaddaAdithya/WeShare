import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsTabComponent } from './employees/subjects-tab/subjects-tab.component';
import { SubjectsDataComponent } from './employees/subjects-data/subjects-data.component';
import { SubjectsAddEditComponent } from './employees/subjects-add-edit/subjects-add-edit.component';
import { UpdatesubjectComponent } from './employees/updatesubject/updatesubject.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    SubjectsComponent,
    SubjectsTabComponent,
    SubjectsDataComponent,
    SubjectsAddEditComponent,
    UpdatesubjectComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
