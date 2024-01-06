import { Component, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';
import { IconDefinition, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeType } from './domain/theme.damin';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  activeIcon = faSun;

  private themeIconMap = new Map<ThemeType, IconDefinition>([
    [ThemeType.light, faSun],
    [ThemeType.dark, faMoon]
  ]);

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    let themeType = this.themeService.getCurrentThemeType();
    this.setActiveIcon(themeType);
  }

  toggleTheme() {
    let themeType = this.themeService.getNextThemeType();
    this.themeService.setThemeByThemeType(themeType);
    this.setActiveIcon(themeType);
  }

  setActiveIcon(themeType: ThemeType) {
    let icon = this.themeIconMap.get(themeType);
    if (icon) {
      this.activeIcon = icon;
    }
  }
}
