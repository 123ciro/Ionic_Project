import { NgModule } from '@angular/core';
import { SeparadormilesPipe } from './separadormiles.pipe';
import { LongitudPipe } from './longitud.pipe';
import { CondicionPipe } from './condicion.pipe';





export const pipes =[

  SeparadormilesPipe,
  LongitudPipe,
  CondicionPipe,

]


@NgModule({
	declarations: [pipes],

	exports: [pipes]
})
export class PipesModule {}
