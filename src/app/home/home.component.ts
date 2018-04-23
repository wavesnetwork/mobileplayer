import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.isLoading = false;
  //   this.quoteService.getRandomQuote({ category: 'dev' })
  //     .finally(() => {  })
  //     .subscribe((quote: string) => { this.quote = quote; });
  }

}
