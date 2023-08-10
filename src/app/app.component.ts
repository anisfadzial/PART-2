import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="f1">
  <form (ngSubmit)="onSubmit()" #myForm="ngForm">
    <div>
      <label>Full Name</label>
      <span class="required-star">*</span>
    </div>
    <div class="input-container">
      <input type="text" name="firstName" [(ngModel)]="firstName" required placeholder="First Name" />
      <input type="text" name="lastName" [(ngModel)]="lastName" required placeholder="Last Name" />
    </div>
    <div class="f1">
      <label>E-mail</label>
    </div>
    <div class="f2">
      <input type="email" name="email" [(ngModel)]="email" placeholder="ex: email@yahoo.com" />
    </div>
    <div style="color:grey;">
    example@example.com
    </div>
    <div class="button-container">
      <button type="submit">Submit</button>
      <button type="button" (click)="clearForm()">Clear Form</button>
    </div>
  </form>
</div>
  `,
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  onSubmit() {
    if (!this.firstName || !this.lastName) {
      alert('Please fill in the First Name and Last Name fields.');
    } else {
      const fullName = this.firstName + ' ' + this.lastName;
      alert('Full Name: ' + fullName);
    }
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}