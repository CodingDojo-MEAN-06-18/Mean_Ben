import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  noteList: Array<Note> =[];
  constructor(private noteService: NoteService) {

   }

  ngOnInit() {
    this.noteService.getNotes().subscribe(
      (notes) => {this.noteList = notes;}
    )
  }

}
