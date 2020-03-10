import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { MerchandiseService } from '../merchandise.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadMerchandise$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.merchandiseService.getAll().pipe(
        map(merchandise => {
          return { type: ActionTypes.LoadSuccess, payload: merchandise };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private merchandiseService: MerchandiseService
  ) {}
}
