System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.query = '';
                    this.filteredList = [];
                    this.mydata = {};
                    this.continents = [];
                    this.onContinents = true;
                    this.selected = '';
                    this.currDisplay = [];
                }
                AppComponent.prototype.getData = function () {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", '/mydata');
                        xhr.onload = function () { return resolve(JSON.parse(xhr.responseText)); };
                        xhr.onerror = function () { return reject(xhr.statusText); };
                        xhr.send();
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getData().then(function (response) {
                        for (var continent in response) {
                            _this.continents.push(continent);
                        }
                        _this.currDisplay = _this.continents; // immediately set the current display array to continents since that's where we'll start 
                        _this.mydata = response; // save an object copy of the response (to be used later for key-value lookup for countries per continent)
                    });
                };
                AppComponent.prototype.handleGoBack = function () {
                    this.query = '';
                    this.selected = '';
                    this.onContinents = true;
                    this.filteredList = [];
                    this.currDisplay = this.continents;
                };
                AppComponent.prototype.handleSelect = function (a) {
                    if (this.onContinents) {
                        this.filteredList = this.currDisplay = this.mydata[a];
                        this.query = '';
                    }
                    this.selected = a;
                    this.onContinents = false;
                };
                AppComponent.prototype.filter = function (event) {
                    var _this = this;
                    this.filteredList = this.currDisplay.filter(function (el) {
                        return el.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\" >\n            <div class=\"input-field col s12\">\n                <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter($event)>\n                <label for=\"country\">\n                    <div *ngIf=\"onContinents\">Enter a continent</div>\n                    <div *ngIf=\"!onContinents\">Search a country</div>\n                </label>\n            </div>\n\n            <div *ngIf=\"!onContinents\">You selected: {{ selected }}</div>\n\n            <div *ngIf=\"!onContinents\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"handleGoBack()\">back</button></div>\n\n            <div class=\"col-sm-3 col-md-2 sidebar\">\n                <ul class=\"nav nav-sidebar\">\n                    <li *ngFor=\"#item of filteredList #i=index\" (click)=\"handleSelect(item)\">\n                        <a href=\"javascript:void(0)\">{{ item }}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    \t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map