import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { DataService } from './data.service';
import { UtilService } from './util.service';
import { InstructionComponent } from './instruction/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteModalComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FullCalendarModule,
    StorageServiceModule
  ],
  entryComponents: [
    NoteModalComponent,
    InstructionComponent
  ],
  providers: [DataService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
