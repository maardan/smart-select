import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container" >
            <div class="input-field col s12">
                <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter($event)>
                <label for="country">
                    <div *ngIf="onContinents">Enter a continent</div>
                    <div *ngIf="!onContinents">Search a country</div>
                </label>
            </div>

            <div *ngIf="!onContinents">You selected: {{ selected }}</div>

            <div *ngIf="!onContinents"><button type="button" class="btn btn-primary" (click)="handleGoBack()">back</button></div>

            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li *ngFor="#item of filteredList #i=index" (click)="handleSelect(item)">
                        <a href="javascript:void(0)">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
    	`
})

export class AppComponent {
    public query = '';
    public filteredList = [];
    public mydata = {};
    public continents = [];
    public onContinents = true;
    public selected = '';
    public currDisplay = [];

    getData() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", '/mydata');
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }

    ngOnInit() {
        this.getData().then((response) => {
            for (let continent in response) {
                this.continents.push(continent);
            }
            this.currDisplay = this.continents; // immediately set the current display array to continents since that's where we'll start 
            this.mydata = response; // save an object copy of the response (to be used later for key-value lookup for countries per continent)
        });
    }

    handleGoBack() {
        this.query = '';
        this.selected = '';
        this.onContinents = true;
        this.filteredList = [];
        this.currDisplay = this.continents;
    }

    handleSelect(a) {
        if (this.onContinents) {
            this.filteredList = this.currDisplay = this.mydata[a];
            this.query = '';
        }
        this.selected = a;
        this.onContinents = false;
    }

    filter(event: any) {
        this.filteredList = this.currDisplay.filter((el) => {
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        });
    }
}