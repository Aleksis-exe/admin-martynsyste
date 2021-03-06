export interface ITicketHero {
  user: IHero
  roles: string[]
}

export interface IHero {
  id: string
  userName: string
  email: string | null
  emailConfirmed: boolean
  phoneNumber: string | null
  lastName: string | null
  firstName: string | null
  fullName: string
  reversFullName: string
  lockout: boolean
}
