import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() rooms;
  @Input() currentRoomIndex;
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

  setBackgroundColor(): Object {
    return {'background-color': this.occupiedChecked ? this.rooms[this.currentRoomIndex].occupied ? '#ff8800' : '#09ff2a' : 'white'};
  }

  setWidth(): Object {
    return {'width': this.listChecked ? '50rem' : this.rooms[this.currentRoomIndex].width};
  }

  setHeight(): Object {
    return {'height': this.listChecked ? '100px' : this.rooms[this.currentRoomIndex].height};
  }
}
