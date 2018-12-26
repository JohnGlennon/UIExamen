import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() rooms;
  @Input() currentRoomIndex;
  @Input() currentFloor;
  @Input() listChecked;
  @Input() nameChecked;
  @Input() typeChecked;
  @Input() capacityChecked;
  @Input() beamerChecked;
  @Input() occupiedChecked;
  @Input() crowdChecked;
  @Output() stop: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  pickId(): string {
    if (this.listChecked) {
      return 'rectangle';
    } else {
      return 'shape';
    }
  }

  setStyle(): Object {
    return {
      'background-color': this.occupiedChecked ? this.rooms[this.currentRoomIndex].occupied ? '#ff8800' : '#09ff2a' : 'white',
      'width': this.listChecked ? '40rem' : this.rooms[this.currentRoomIndex].width * 10 + 'px',
      'height': this.listChecked ? '100px' : this.rooms[this.currentRoomIndex].height * 10 + 'px'
    };
  }
}
