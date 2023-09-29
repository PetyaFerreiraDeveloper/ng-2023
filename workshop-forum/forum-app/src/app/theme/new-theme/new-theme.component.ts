import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  constructor(private router: Router, private themeService: ThemeService) {}
  newThemeHandler(form: NgForm): void {
    if (form.invalid) return;
    const { themeName, postText } = form.value;
    this.themeService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/theme/recent'])
    });
    form.reset();
  }
}
