import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter</h1>

    <radh-counter></radh-counter>
    `
})

export class CounterExampleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
