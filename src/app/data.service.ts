import { Injectable, Inject } from '@angular/core';
import * as faker from 'faker';
import { UUID } from 'angular2-uuid';
import { UtilService } from './util.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { DatePipe } from '@angular/common';
import { parse } from '@fullcalendar/core/datelib/parsing';

@Injectable()
export class DataService {

  datePipe = new DatePipe('en-US');
  
  constructor(private utilService: UtilService, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  updateData(table, item): any {
    return table.filter(element => {
      if (element.id === item.id) {
        element.title = item.title;
        element.note = item.note;
        console.log('matched, element=', element);
      };
      return element;
    });
  }

  deleteData(table, id): any {
    return table.filter(element => element.id !== id);
  }

  searchData(table, search): any {
    return table.filter(element => element.title.includes(search) || element.note.includes(search));
  }

  getSampleNotEvents(startMonth, endMonth, noteCount) {
    const noteEvents = [];
    if  ( parseInt(startMonth) > parseInt(endMonth)) {
      [startMonth, endMonth] = [endMonth, startMonth];
    }
    const startDate = `2020-${startMonth}-01`;
    let date = new Date(`2020-${endMonth}-01`);
    let date2 = new Date(date.getFullYear(), date.getMonth() + 2, 0 );
    const endDate = this.datePipe.transform(date2, 'yyyy-MM-dd');
    for (let i = 0; i < noteCount; i++) {
      noteEvents.push(this.getFakeNoteEvent(startDate, endDate));
    }
    return noteEvents;
  }

  getFakeNoteEvent(startDate, endDate) {
    return {
      name: '',
      id: UUID.UUID(),
      title: faker.lorem.words(),
      start: faker.date.between(startDate, endDate),
      note: faker.lorem.sentence(),
    };
  }

  setCalendarEvents = (data) => {
    this.storage.set('calendarEvents', data);
  }

  getCalendarEvents = () => {
    return this.storage.get('calendarEvents') || [];
  }

}
