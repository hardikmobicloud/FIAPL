import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMarathiPage } from './form-marathi.page';

const routes: Routes = [
  {
    path: '',
    component: FormMarathiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMarathiPageRoutingModule {}
