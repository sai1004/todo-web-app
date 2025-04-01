import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { todosReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';
@NgModule({
    declarations: [AppComponent, TodoComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ todos: todosReducer }),
        EffectsModule.forRoot([TodoEffects]),
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
