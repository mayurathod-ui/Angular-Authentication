import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showSuccess(message: string): void {
    // Implement logic to show a success toast
    console.log(`Success: ${message}`);
  }

  showError(message: string): void {
    // Implement logic to show an error toast
    console.error(`Error: ${message}`);
  }

  showInfo(message: string): void {
    // Implement logic to show an info toast
    console.log(`Info: ${message}`);
  }
}
