import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/apis/chuck.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // Property usable in the HTML Template
  joke = '';
  // I want to get data from the Chuck Service
  constructor(private chuckS: ChuckService) {}

  // When the component is created
  async ngOnInit() {
    // I call the function from the Chuck Service
    // This function is asyng, so I need to Away for the data
    const response = await this.chuckS.getRndJoke();
    console.log(response.value);
    this.joke = response.value;
  }

}
