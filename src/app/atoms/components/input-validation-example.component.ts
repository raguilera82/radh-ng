import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-validation-example',
    template: `

    <h2>Inputs with validation</h2>

    <radh-input [validator]="validator" (changed)="changeInput($event)"></radh-input>
    `
})

export class InputValidationExampleComponent implements OnInit {
    validator: any;

    constructor() { }

    ngOnInit() {
        this.validator = [{
            name: 'length',
            options: {
                min: 6
            }
        }, 'fruit'];
    }

    changeInput(ev) {
        console.log(ev.detail);
    }
}
