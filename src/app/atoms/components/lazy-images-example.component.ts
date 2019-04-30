import { Component } from '@angular/core';

@Component({
    selector: 'app-lazy-images-example',
    template: `
        <radh-lazy-img time="3500" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="3000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="5000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="2000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
    `
})
export class LazyImagesExampleComponent {

}
