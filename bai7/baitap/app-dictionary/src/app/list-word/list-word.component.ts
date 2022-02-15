import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { Iword } from '../iword';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {

  words : Iword[] ;
  
  constructor(private dictionaryService: DictionaryService) {
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.words = this.dictionaryService.getAll();
  }

}
