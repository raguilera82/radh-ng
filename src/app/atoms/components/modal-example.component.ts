import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal-example',
    template: `
    <h1>Example Modal</h1>

    <radh-modal #modal title="Important!" visible="false" (ok)="onOk()" (cancel)="onCancel()">
        <p>This is some really important stuff</p>
    </radh-modal>
    <radh-button (click)="onClickOpen()">Open</radh-button>
    `
})

export class ModalExampleComponent implements OnInit {

    @ViewChild('modal') modal: ElementRef;

    constructor(private renderer: Renderer2) { }

    ngOnInit() { }

    onOk() {
        console.log('Ok pressed');
    }

    onCancel() {
        console.log('Cancel pressed');
    }

    onClickOpen() {
        this.renderer.setAttribute(this.modal.nativeElement, 'visible', 'true');
        this.renderer.setAttribute(this.modal.nativeElement, 'style', '--header-bg-color: blue');

    }
}
