import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-hello-example',
    template: `
    <h2>Hello with i18n</h2>
    <radh-locale-select (sendLocale)="changeLocale($event)"
        locales='[{"name": "English", "value": "en"}, {"name":"Español", "value": "es"}]'></radh-locale-select>
    <radh-hello name="Rubén Aguilera"></radh-hello>
    `
})
export class HelloExampleComponent {

    constructor(private elementRef: ElementRef) { }

    changeLocale(ev) {
        console.log(ev.detail);
        const radhHello = this.elementRef.nativeElement.querySelector('radh-hello');
        radhHello.lang = ev.detail;
        radhHello.loadLocale();
    }

}
