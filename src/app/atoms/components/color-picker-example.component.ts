import { Component } from '@angular/core';

@Component({
    selector: 'app-color-picker-example',
    template: `
    <h2>Color Picker</h2>
    <radh-color-picker (colorChanged)="colorChanged($event)" default-value="#0000ff" resettable></radh-color-picker>
    `
})

export class ColorPickerExampleComponent {

    colorChanged(ev) {
        console.log(ev.detail);
      }
}
