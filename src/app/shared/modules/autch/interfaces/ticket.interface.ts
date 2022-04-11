export interface ITicket {
  user: {
    id: string
    userName: string
    email: string
    emailConfirmed: boolean
    phoneNumber: string
    lastName: string
    firstName: string
    fullName: string
    reversFullName: string
    lckout: boolean
  }
  roles: string[]
}
