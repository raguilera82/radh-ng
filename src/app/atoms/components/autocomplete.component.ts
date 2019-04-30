import { Component } from '@angular/core';

@Component({
    selector: 'app-autocomplete',
    template: `
    <h2>Autocomplete</h2>

    <p>Selected: {{selected}}</p>
    <div>
      <radh-autocomplete (valueSelected)="valueSelected($event)" label="Select a fruit" label-by="fruitlabel" isAsync="false"
        items='[ "Apple", "Banana", "Orange", "Mango", "Pear", "Peach", "Grape", "Tangerine", "Pineapple"]'></radh-autocomplete>
    </div>

    `
})

export class AutocompleteComponent {
    selected: string;

    valueSelected(ev) {
        console.log(ev.detail);
        this.selected = ev.detail;
    }
}
