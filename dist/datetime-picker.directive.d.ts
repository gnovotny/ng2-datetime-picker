import { OnInit, OnChanges, ViewContainerRef, EventEmitter, ComponentFactoryResolver, SimpleChanges } from '@angular/core';
import { ControlContainer } from '@angular/forms';
/**
 * If the given string is not a valid date, it defaults back to today
 */
export declare class DateTimePickerDirective implements OnInit, OnChanges {
    private resolver;
    private viewContainerRef;
    private parent;
    dateFormat: string;
    dateOnly: boolean;
    closeOnSelect: string;
    formControlName: string;
    ngModel: any;
    ngModelChange: EventEmitter<{}>;
    private el;
    private datetimePickerEl;
    private componentRef;
    private ctrl;
    private sub;
    constructor(resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, parent: ControlContainer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    triggerChange(newNgModel: any): void;
    ngOnDestroy(): void;
    valueChanged: (date: string | Date) => void;
    showDatetimePicker(): void;
    hideDatetimePicker: (event?: any) => void;
    private keyEventListener;
    private elementIn(el, containerEl);
    private styleDatetimePicker();
    /**
     *  returns toString function of date object
     */
    private getFormattedDateStr();
    private getDate(arg);
}
