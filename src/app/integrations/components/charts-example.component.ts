import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-charts-example',
    template: `
    <h1>Chart.js Examples</h1>
    <radh-chart></radh-chart>
    `
})

export class ChartsExampleComponent implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        const radhChart = this.elementRef.nativeElement.querySelector('radh-chart');
        radhChart.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
        radhChart.values = [3, 19, 3, 50, 20, 3];
    }

}
