import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/apis/chuck.service';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  // Property usable in the HTML Template
  categoriesArray = '';
  // I want to get data from the Chuck Service
  constructor(private chuckS: ChuckService) {}

  // When the component is created
  async ngOnInit() {
    // I call the function from the Chuck Service
    // This function is asyng, so I need to Await for the data
    const response = await this.chuckS.getCategories();
    console.log(response);
    this.categoriesArray = response;
  }
  handleClick(something: string) {
    //alert(something);
  }
}

