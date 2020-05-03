import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEnglishPage } from './form-english.page';

const routes: Routes = [
  {
    path: '',
    component: FormEnglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEnglishPageRoutingModule {}
