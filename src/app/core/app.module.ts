import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './components/nav/nav.component';
import { PendingTasksComponent } from './components/pages/tasks/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './components/pages/tasks/completed-tasks/completed-tasks.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { ContainerComponent } from './components/container/container.component';
import { AddTaskModalComponent } from './components/modals/add-task-modal/add-task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PendingTasksComponent,
    CompletedTasksComponent,
    HomeComponent,
    TasksComponent,
    ContainerComponent,
    AddTaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
