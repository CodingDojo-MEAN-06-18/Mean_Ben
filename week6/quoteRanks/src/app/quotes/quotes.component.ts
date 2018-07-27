import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() vQuoteCollection;
  @Output() delEvent = new EventEmitter();


  count=0;
  onButtonClick(data,quote){
    console.log('this button work',data,quote)
    if(data==='up'){
      quote.count++;
    }else if(data==='down'){
      quote.count--;
    }else if(data==='del'){
      console.log('deleting', quote)
      this.delEvent.emit(quote);

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
