import { Iword } from './iword';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  

  words : Iword[] = [
    {
      id: 1,
      word:'Hello', 
      means: 'Xin chao'
    },
    {
      id: 2,
      word:'Goodbye', 
      means: 'Tam Biet'
    },
    {
      id: 3,
      word:'Sorry', 
      means: 'Xin loi'
    },
    {
      id: 4,
      word:'Morning', 
      means: 'Buoi sang'
    },
    {
      id: 5,
      word:'Noon', 
      means: 'Buoi trua'
    }
  ]

  constructor() { }

  public getAll(){
    return this.words;
  }

  public findById(id: number)  : Iword{
    return this.words.find(w => w.id === id)
  }
}
