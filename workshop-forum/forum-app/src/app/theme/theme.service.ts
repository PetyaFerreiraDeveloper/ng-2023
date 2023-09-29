import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITheme } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  getThemes(maxCount?: number) {
    let url = '/api/themes';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<ITheme[]>(url);
  }

  getTheme(id: string) {
    return this.http.get<ITheme>('/api/themes' + id);
  }

  createTheme(name: string, text: string) {
    return this.http.post<ITheme>('/api/themes', {
      themeName: name,
      postText: text,
    });
  }

  updateTheme(id: string, name: string, text: string) {
    this.http.put<ITheme>('/api/theme' + id, {
      themeName: name,
      postText: text,
    });
  }

  deleteThemePost(themeId: string, postId: string) {
    this.http.delete<ITheme>('/api/theme' + themeId + '/post' + postId);
  }
}
