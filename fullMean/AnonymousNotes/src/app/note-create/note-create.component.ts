import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  note: Note = new Note();
  constructor(private noteService: NoteService) { }
  @Output() newNote = new EventEmitter<Note>();
  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('submitting form => Service');
    this.newNote.emit(form.value);
    this.note = new Note();
    form.reset();
    // this.noteService.createNote(form.value).subscribe(
    //   (note)=> {
    //       console.log(note);
    //       this.note = new Note();
    //       form.reset();
    //   }
    // );

  }

}
