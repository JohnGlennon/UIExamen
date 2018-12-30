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

  currentRoom;

  constructor() {
  }

  ngOnInit() {
    this.currentRoom = this.rooms[this.currentRoomIndex];
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
      'background-color': this.getColor(),
      'width': this.listChecked ? '40rem' : this.currentRoom.width * 10 + 'px',
      'height': this.listChecked ? '100px' : this.currentRoom.height * 10 + 'px'
    };
  }

  private getColor(): any {
    const blue = 0;
    const maxRed = 255;
    const maxGreen = 255;

    if (this.currentRoom.type === 'Auditorium' || this.currentRoom.type === 'Classroom'
      || this.currentRoom.type === 'Meetingroom') {
      return this.occupiedChecked ? this.currentRoom.occupied ? 'red' : 'green' : 'white';
    } else if ((this.currentRoom.type === 'Cafetaria' || this.currentRoom.type === 'Studyarea')
      && this.crowdChecked) {
      const percent = this.currentRoom.crowd / this.currentRoom.capacity;
      const red = maxRed - (maxRed * (1 - percent));
      const green = maxGreen * (1 - percent);
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
  }

  checkForFloor(): boolean {
    return (this.pickId() === 'rectangle' && this.currentFloor === this.currentRoom.floor)
      || this.pickId() === 'shape';
  }
}
