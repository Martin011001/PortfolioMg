import { Injectable, EventEmitter  } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComunicacionIdService {

  id = new EventEmitter<any>();

}
