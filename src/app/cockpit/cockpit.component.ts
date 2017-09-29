import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Output event to parent component
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();

  // Viewchild - element reference
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // NgModel
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  onAddServer (nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint (nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  ngOnInit() {
  }

}
