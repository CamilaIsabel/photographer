import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls:['./photo.component.css'],
})
export class PhotoComponent {
  @Input() photoText: string = '';
  @Input() alt: string = '';

 
  modalIsOpen: boolean = false;
  
  openModal() {
    this.modalIsOpen = true;
  }

  closeModal(){
    this.modalIsOpen = false;
  }

}

