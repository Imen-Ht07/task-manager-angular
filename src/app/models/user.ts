export class User {
    constructor(
      public name: string,
      public email: string,
      public photo: string = 'default.jpg',
      public role: 'user' | 'project-manager' | 'admin' = 'user',
      public password: string,
      public passwordConfirm?: string,
      public passwordChangedAt?: Date,
      public passwordResetToken?: string,
      public passwordResetExpires?: Date,
      public active: boolean = true
    ) {}
  
    // Method to validate if passwords match
    public isPasswordConfirmed(): boolean {
      return this.password === this.passwordConfirm;
    }
  }