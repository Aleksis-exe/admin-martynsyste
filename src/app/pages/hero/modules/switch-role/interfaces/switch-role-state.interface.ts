import {IRoleForCheckbox} from './role-for-checkbox.interface'
import { IRoles } from './roles.interface'

export interface ISwitchRoleState {
  rolesByUser: IRoleForCheckbox[] 
  roles: IRoles[] 
  isLoader: boolean
}
