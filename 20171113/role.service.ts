import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROLE } from './mock-role';
import { Role } from './role';
import { SelectItem } from 'primeng/primeng';
import { CODE } from './mock-codes';
import 'rxjs/add/observable/of';

@Injectable()
export class RoleService {
  getRoles(): Observable<Role[]> {
    return Observable.of(ROLE);
  }

  // roles
  // getRoles(): Role[] {
  //   return ROLE;
  // }
  // codes
  getCodes(): SelectItem[] {
    const codes: SelectItem[] = null;
    let i = 0;
    for (const code of CODE) {
      i++;
      codes[i].label = code;
      codes[i].value = code;
    }
    return codes;
  }
}
