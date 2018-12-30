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
      'background-color': this.getColor(),
      'width': this.listChecked ? '40rem' : this.rooms[this.currentRoomIndex].width * 10 + 'px',
      'height': this.listChecked ? '100px' : this.rooms[this.currentRoomIndex].height * 10 + 'px'
    };
  }

  private getColor(): any {
    const blue = 0;
    const maxRed = 255;
    const maxGreen = 255;

    if (this.rooms[this.currentRoomIndex].type === 'Auditorium' || this.rooms[this.currentRoomIndex].type === 'Classroom'
      || this.rooms[this.currentRoomIndex].type === 'Meetingroom') {
      return this.occupiedChecked ? this.rooms[this.currentRoomIndex].occupied ? 'red' : 'green' : 'white';
    } else if ((this.rooms[this.currentRoomIndex].type === 'Cafetaria' || this.rooms[this.currentRoomIndex].type === 'Studyarea')
      && this.crowdChecked) {
      const percent = this.rooms[this.currentRoomIndex].crowd / this.rooms[this.currentRoomIndex].capacity;
      const red = maxRed - (maxRed * (1 - percent));
      const green = maxGreen * (1 - percent);
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
  }

  checkForFloor(): boolean {
    return (this.pickId() === 'rectangle' && this.currentFloor === this.rooms[this.currentRoomIndex].floor)
      || this.pickId() === 'shape';
  }
}
