import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from './searchcomponent.service';

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css'],
  providers: [SearchService]
})
export class SearchcomponentComponent implements OnInit {
  searchResults;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    console.log('herefst!');
    this.searchService.getlist('default').subscribe((res) => {
      this.searchResults = res;
      console.log(res);
    });
  }

  onSubmit(data) {
    console.log(data.searchInput);
    this.searchService.getlist(data.searchInput).subscribe((res) => {
      this.searchResults = res;
      console.log(res);
    });
  }
}
