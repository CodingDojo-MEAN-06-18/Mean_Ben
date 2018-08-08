import { Injectable } from '@angular/core';
import { Note } from './note';
import {HttpClient} from "@angular/common/http";
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  // noteList: any = [];

  private base = '/api/notes';
  getNotes():Observable<Note[]>{
    console.log('Service getting all notes');
    return this.http.get<Note[]>(this.base);
    // return this.noteList;
  }

  createNote(note: Note){
    console.log('Service creating a note', note);
    return this.http.post<Note>(this.base, note);
    // this.noteList.push(note)
    // console.log(this.noteList);
  }

}
