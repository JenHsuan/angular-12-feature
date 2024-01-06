import { Injectable } from '@angular/core';
import { Theme, ThemeType, dark, light } from '../domain/theme.damin';
import { BehaviorSubject } from 'rxjs';

const THEME_KEY = "theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeType = ThemeType.light;
  private themeFuncMap = new Map<ThemeType, () => void>([
    [ThemeType.light, () => this.setCurrentTheme(light)],
    [ThemeType.dark, () => this.setCurrentTheme(dark)]
  ]);

  protected themeSubject = new BehaviorSubject<ThemeType>(ThemeType.light);
  theme$ = this.themeSubject.asObservable();

  getCurrentThemeType(): ThemeType {
    let themeType = this.getThemeTypeToLocalStorage();
    return themeType ? themeType : this.currentThemeType;
  }

  private setCurrentThemeType(themeType: ThemeType) {
    this.currentThemeType = themeType;
  }

  getNextThemeType(): ThemeType {
    const list = [...this.themeFuncMap.keys()];
    let index = list.findIndex(path => path === this.currentThemeType) + 1;
    if (index >= list.length) {
      index = 0;
    }
    if (index < 0) {
      index = list.length - 1;
    }

    return list[index];
  }

  setThemeByThemeType(themeType: ThemeType) {
    let setThemeFunc = this.themeFuncMap.get(themeType);
    if (setThemeFunc) {
      setThemeFunc();
    }
  }

  private setCurrentTheme(theme: Theme): void {
    let themeType = theme.name as ThemeType;
    this.setCurrentThemeType(theme.name as ThemeType);
    this.setThemeTypeToLocalStorage(this.currentThemeType);

    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    });

    this.themeSubject.next(themeType);
  }

  private setThemeTypeToLocalStorage(themeType: ThemeType) {
    localStorage.setItem(THEME_KEY, themeType);
  }

  private getThemeTypeToLocalStorage(): ThemeType {
    let res = localStorage.getItem(THEME_KEY);
    return res ? res as ThemeType : this.currentThemeType;
  }
}
