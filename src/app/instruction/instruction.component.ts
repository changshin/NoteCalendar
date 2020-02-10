import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  instrunctions =
    [
      'How to change calendar format? Click "month", "week", or "day" at top right side.',
      'How to go the previous or next month, week, or day? Click "<" or ">" at top left side.',
      'How to add a new note? Click a date in calendar.',
      'How to update a note? Click a note. then update title and note. then click "Save" button.',
      'How to delete a note? Click a note. Then click "Delete" button.',
      'How to search/filter? Type in search box.',
      'How to hide/show weekends? Click "Without/with Weekends".',
      'How to refresh sample notes in month(s)? Select between months at right top bar. then click "Refresh".'
    ];

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {
    }

}
