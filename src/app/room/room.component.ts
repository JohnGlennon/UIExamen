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
  @Input() hoursReserved;
  @Input() colorNotOccupied;
  @Input() colorOccupied;

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
    const max = 255;

    // const occupiedRed = this.colorOccupied.substr(1, 2);
    // const occupiedGreen = this.colorOccupied.substr(3, 2);
    // const occupiedBlue = this.colorOccupied.substr(5, 2);
    //
    // const notOccupiedRed = this.colorNotOccupied.substr(1, 2);
    // const notOccupiedGreen = this.colorNotOccupied.substr(3, 2);
    // const notOccupiedBlue = this.colorNotOccupied.substr(5, 2);

    if (this.currentRoom.type === 'Auditorium' || this.currentRoom.type === 'Classroom'
      || this.currentRoom.type === 'Meetingroom') {
      return this.occupiedChecked ? this.currentRoom.occupied ? this.colorOccupied : this.colorNotOccupied : 'white';
    } else if ((this.currentRoom.type === 'Cafetaria' || this.currentRoom.type === 'Studyarea')
      && this.crowdChecked) {
      const percent = this.currentRoom.crowd / this.currentRoom.capacity;
      const red = max - (max * (1 - percent));
      const green = max * (1 - percent);
      const blue = 0;
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
  }

  checkForFloor(): boolean {
    return (this.pickId() === 'rectangle' && this.currentFloor === this.currentRoom.floor)
      || this.pickId() === 'shape';
  }
}
