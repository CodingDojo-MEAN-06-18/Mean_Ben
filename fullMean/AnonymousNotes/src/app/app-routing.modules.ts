import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteListComponent } from './note-list/note-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NoteListComponent,
    children: []
  }
];











@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
