import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ACTION } from '../app.constant';
@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {

  ACTION = ACTION;
  @Input() noteEvent = { id: '', title: '', start: '', note: '', type: '' };
  @Output() result: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  save(type = ACTION.CANCEL) {
    if (this.noteEvent.title && this.noteEvent.note) {
      this.noteEvent.type = type;
      this.activeModal.dismiss();
      this.result.emit(this.noteEvent);
    }
  }

}
