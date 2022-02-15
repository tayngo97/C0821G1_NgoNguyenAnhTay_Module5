import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { Iword } from '../iword';

@Component({
  selector: 'app-detail-word',
  templateUrl: './detail-word.component.html',
  styleUrls: ['./detail-word.component.css']
})
export class DetailWordComponent implements OnInit {

  word: Iword;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
            const id = this.activatedRoute.snapshot.params.id;
             this.word = this.dictionaryService.findById(Number(id));
   }

  ngOnInit(): void {
  }

}
