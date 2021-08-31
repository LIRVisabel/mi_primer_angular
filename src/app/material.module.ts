import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Este modulo se inyecta al modulo ppal. app.modules.ts se exportaran los nuevos componentes de material atodos lo modulos*/
/*impor de la web*/
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  /*estos modulos dependen de otro modulo externo especifico x eso se exportan para q esten a disposición de otros modulos*/
  exports: [
  MatProgressBarModule,
  MatMenuModule,
  MatCardModule
  ]
})
export class MaterialModule { }
