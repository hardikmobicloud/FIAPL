import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEnglishPageRoutingModule } from './form-english-routing.module';

import { FormEnglishPage } from './form-english.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormEnglishPageRoutingModule
  ],
  declarations: [FormEnglishPage]
})
export class FormEnglishPageModule {}
