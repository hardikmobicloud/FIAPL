import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMarathiPageRoutingModule } from './form-marathi-routing.module';

import { FormMarathiPage } from './form-marathi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormMarathiPageRoutingModule
  ],
  declarations: [FormMarathiPage]
})
export class FormMarathiPageModule {}

