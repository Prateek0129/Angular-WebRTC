import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TransferSignalService {

  constructor() { }

  sendSignalToParent$ = new Subject();
  sendSignalToChild$ = new Subject();

}