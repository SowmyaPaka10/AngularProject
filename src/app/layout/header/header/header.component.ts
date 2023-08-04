/*import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}*/

import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidebarToggleClicked = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  onToggleSidebar()
  {
    //toggle sidebar function
    this.sidebarToggleClicked.emit();
  }
}


