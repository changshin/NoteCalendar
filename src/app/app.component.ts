import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ACTION } from './app.constant';
import { UUID } from 'angular2-uuid';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { EMPTY } from 'rxjs';
import { UtilService } from './util.service';
import { DataService } from './data.service';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { InstructionComponent } from './instruction/instruction.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ACTION = ACTION;
  modalOptions: NgbModalOptions;
  datePipe = new DatePipe('en-US');

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  weekendsLabel = 'With Weekends';
  searchWord = '';
  searchField: FormControl;
  formGroup: FormGroup;
  monthList = [
    {value: '01', label: 'Jan'}, 
    {value: '02', label: 'Feb'},
    {value: '03', label: 'Mar'},
    {value: '04', label: 'Apr'},
    {value: '05', label: 'May'},
    {value: '06', label: 'Jun'},
    {value: '07', label: 'Jul'},
    {value: '08', label: 'Aug'}];
  startMonth = '01';
  endMonth = '03';
  noteList = [20, 30, 40, 50, 60, 70, 80, 90];
  noteCount = 30;

  calendarHeader = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[];

  constructor(private modalService: NgbModal, private modalService2: NgbModal,
    private dataService: DataService, private utilService: UtilService,
    private cdr: ChangeDetectorRef, private fb: FormBuilder ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.searchField = new FormControl();
    this.formGroup = fb.group({ searchWord: this.searchField });
    this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(searchWord => this.searchNotes(searchWord))
      .subscribe(response => {
        // console.log(response);
      });
  }
  ngOnInit() {
    this.refreshNotes();
  }
  
  refreshNotes() {
    this.calendarEvents = this.dataService.getSampleNotEvents(this.startMonth, this.endMonth, this.noteCount);
    this.dataService.setCalendarEvents(this.calendarEvents);
  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
    this.weekendsLabel = this.calendarWeekends ? 'With Weekends' : 'Without Weekends';
  }

  eventClick(event) {
    const noteEvent = {
      id: event.event._def.publicId,
      title: event.event._def.title,
      start: this.datePipe.transform(event.event._instance.range.end, 'yyyy-MM-dd'),
      note: event.event._def.extendedProps.note,
      type: ACTION.SAVE
    };
    this.openModal(noteEvent);
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an note to ' + arg.dateStr + ' ?')) {
      const noteEvent = {
        id: '',
        title: '',
        start: arg.dateStr,
        note: '',
        type: ACTION.ADD
      };
      this.openModal(noteEvent);
    }
  }

  openInstruction() {
    const modalRef = this.modalService2.open(InstructionComponent,
      { backdrop: 'static', keyboard: false, size: 'lg', centered: true});
  }

  openModal(noteEvent) {
    const modalRef = this.modalService.open(NoteModalComponent,
      { backdrop: 'static', keyboard: false, size: 'lg', centered: true});
    modalRef.componentInstance.noteEvent = noteEvent;
    modalRef.componentInstance.result.subscribe((result) => {
      if (result.type === ACTION.DELETE) {
        this.calendarEvents = this.dataService.deleteData(this.calendarEvents, result.id);
      } else if (result.type === ACTION.SAVE) {
          this.calendarEvents = this.dataService.deleteData(this.calendarEvents, result.id);
          this.calendarEvents = this.calendarEvents.concat(
            result
          );
      } else if (result.type === ACTION.ADD) {
          result.id = UUID.UUID();
          delete result.type;
          this.calendarEvents = this.calendarEvents.concat(
            result
          );
      }
      this.dataService.setCalendarEvents(this.calendarEvents);
    }, (reason) => { }
    );
  }

  searchNotes(searchWord) {
    if (searchWord) {
      this.calendarEvents = this.dataService.searchData(this.calendarEvents, searchWord);
    } else {
      this.calendarEvents = this.dataService.getCalendarEvents();
    }
    return EMPTY;
  }


  // TODO: will be added mouse hover to show the note
  eventMouseEnter(event) {
    // console.log(event);
  }
  eventMouseLeave(event) {
    // console.log(event);
  }
}
