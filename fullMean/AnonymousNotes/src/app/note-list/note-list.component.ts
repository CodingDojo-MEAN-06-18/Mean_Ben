import { Component, OnInit, Input, Output } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  noteList: Array<Note> =[];
  constructor(private noteService: NoteService) {
    this.noteService.getNotes().subscribe(
      (notes) => {this.noteList = notes;}
    )
   }

  ngOnInit() {

  }

  onEventCreat(note){
    console.log('event triggered', note)
    this.noteService.createNote(note).subscribe(
      (note)=> {
          console.log("======>",note);
      }
    );
  }

}
