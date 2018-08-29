import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsMappingService {

  private _iconCssClassesMappings: {[propName: string]: string} = {
    'Parking': 'fas fa-parking',
    'Food and drink': 'fas fa-utensils',
    'Free WiFi': 'fas fa-wifi',
    'Airport Shuttle': 'fas fa-plane-arrival',
    'Club': 'fas fa-cocktail',
    'Fitness Centre': 'fas fa-dumbbell',
    'Hot tub': 'fas fa-hot-tub',
    'Cycling': 'fas fa-bicycle',
    'Bar': 'fas fa-glass-martini',
    'Swimming pool': 'fas fa-swimming-pool',
    'Sauna': 'fas fa-thermometer-three-quarters',
    'Spa': 'fas fa-spa',
    'Non-smoking Rooms': 'fas fa-smoking-ban',
    'Massage': 'fas fa-hands',
    'Wine/Champagne': 'fas fa-wine-glass-alt',
    'Terrace': 'fab fa-pagelines',
    'Restaurant': 'fas fa-utensils',
    'Steam Room': 'fas fa-thermometer-three-quarters'
  };
  private _defaultIconClasses = 'fas fa-circle';

  constructor() { }

  getIconClassesByKey(key: String): String {
    const iconClasses = this._iconCssClassesMappings[key as string];
    if (iconClasses) {
      return iconClasses;
    } else {
      return this._defaultIconClasses;
    }
  }
}
