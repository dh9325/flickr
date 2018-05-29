import {NgModule} from '@angular/core';
import {MatCardModule, MatToolbarModule} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {
}
