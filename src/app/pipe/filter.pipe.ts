import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * A kapott tömb szűrése a szűrőkifejezés alapján.
   * @param value {any[]} - a szűrendő tömb.
   * @param phrase {string} - a szűrőkifejezés.
   * @param key {string} - az objektum kulcs, ami alapján szűr.
   * @returns {any[]} - a kifejezés alapján szűrt tömb.
   */
  transform(value: any[], phrase: string, key: string = ''): any[] {


    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    /**
     * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
     * 1. Alakítsd az item[key] értékét string típusúra.
     * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
     * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
     */
    phrase = phrase.toLowerCase();
    return value.filter(item => {
      const strItem: string = ('' + item[key]).toLowerCase();
      return strItem.includes(phrase);
    })

  }

}
