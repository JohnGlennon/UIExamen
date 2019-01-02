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
    return this.listChecked ? 'rectangle' : 'shape';
  }

  pickClass(): string {
    return this.listChecked ? 'roomIfList' : 'roomIfPlan';
  }

  setStyle(): Object {
    return {
      'background-color': this.getColor(),
      'width': this.listChecked ? '40rem' : this.currentRoom.width * 10 + 'px',
      'height': this.listChecked ? '100px' : this.currentRoom.height * 10 + 'px',
      'margin-left': this.listChecked ? '' : this.currentRoom.x * 10 + 'px',
      'margin-top': this.listChecked ? '' : this.currentRoom.y * 10 + 'px'
    }
      ;
  }

  private getColor(): any {
    const max = 255;

    const occupiedRed = this.hexToR(this.colorOccupied);
    const occupiedGreen = this.hexToG(this.colorOccupied);
    const occupiedBlue = this.hexToB(this.colorOccupied);

    const notOccupiedRed = this.hexToR(this.colorNotOccupied);
    const notOccupiedGreen = this.hexToG(this.colorNotOccupied);
    const notOccupiedBlue = this.hexToB(this.colorNotOccupied);

    if (this.currentRoom.type === 'Auditorium' || this.currentRoom.type === 'Classroom'
      || this.currentRoom.type === 'Meetingroom') {
      return this.occupiedChecked ? this.currentRoom.occupied ? this.colorOccupied : this.colorNotOccupied : 'white';
    } else if ((this.currentRoom.type === 'Cafetaria' || this.currentRoom.type === 'Studyarea')
      && this.crowdChecked) {
      const percent = this.currentRoom.crowd / this.currentRoom.capacity;
      const red = occupiedRed - (occupiedRed * (1 - percent)) + (notOccupiedRed * (1 - percent));
      const green = occupiedGreen - (occupiedGreen * (1 - percent)) + (notOccupiedGreen * (1 - percent));
      const blue = occupiedBlue - (occupiedBlue * (1 - percent)) + (notOccupiedBlue * (1 - percent));
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
  }

  private hexToR(h): number {
    return parseInt((this.cutHex(h)).substring(0, 2), 16);
  }

  private hexToG(h): number {
    return parseInt((this.cutHex(h)).substring(2, 4), 16);
  }

  private hexToB(h): number {
    return parseInt((this.cutHex(h)).substring(4, 6), 16);
  }

  private cutHex(h): any {
    return (h.charAt(0) === '#') ? h.substring(1, 7) : h;
  }

  checkForFloor(): boolean {
    return (this.pickId() === 'rectangle' && this.currentFloor === this.currentRoom.floor)
      || this.pickId() === 'shape';
  }
}
