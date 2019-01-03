import {Component, OnInit} from '@angular/core';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private rooms = [];
  // roomIndex = 0;

  error = false;

  public currentFloor;
  public currentRoom;

  public listChecked;

  // public roomClicked;

  public nameChecked;
  public typeChecked;
  public capacityChecked;
  public beamerChecked;
  public occupiedChecked;
  public crowdChecked;

  public colorNotOccupied;
  public colorOccupied;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    // for (let i = 0; i < this.roomSet.length; i++) {
    //   this.rooms.push(this.roomSet[i]);
    // }

    this.roomService.getRooms().subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => {
        this.error = true;
        console.log(error as string);
      }
    );

    this.listChecked = true;

    // this.roomClicked = false;
    this.currentFloor = 0;
    this.currentRoom = null;

    this.nameChecked = true;
    this.typeChecked = true;
    this.capacityChecked = false;
    this.beamerChecked = false;
    this.occupiedChecked = true;
    this.crowdChecked = true;

    // this.nameChecked = localStorage.getItem('nameChecked');
    // this.typeChecked = localStorage.getItem('typeChecked');
    // this.capacityChecked = localStorage.getItem('capacityChecked');
    // this.beamerChecked = localStorage.getItem('beamerChecked');
    // this.occupiedChecked = localStorage.getItem('occupiedChecked');
    // this.crowdChecked = localStorage.getItem('crowdChecked');

    // localStorage.setItem('nameChecked', this.nameChecked);
    // localStorage.setItem('typeChecked', this.typeChecked);
    // localStorage.setItem('capacityChecked', this.capacityChecked);
    // localStorage.setItem('beamerChecked', this.beamerChecked);
    // localStorage.setItem('occupiedChecked', this.occupiedChecked);
    // localStorage.setItem('crowdChecked', this.crowdChecked);

    this.colorNotOccupied = '#00ff00';
    this.colorOccupied = '#ff0000';
  }

  // add(): void {
  //   if (this.roomIndex < this.roomSet.length) {
  //     this.rooms.push(this.roomSet[this.roomIndex]);
  //     this.roomIndex++;
  //   }
  // }
  //
  // remove(): void {
  //   this.rooms.pop();
  //   this.roomIndex--;
  // }

  floorDown(): void {
    if (this.currentFloor > 0) {
      this.currentFloor--;
    }
  }

  floorUp(): void {
    if (this.currentFloor < 5) {
      this.currentFloor++;
    }
  }

  setRoomClicked(currentRoomIndex): void {
    // this.roomClicked = !this.roomClicked;
    this.currentRoom = this.rooms[currentRoomIndex];
  }

  checkIfSelected(): boolean {
    return this.currentRoom != null;
  }

  checkForCrowd(): boolean {
    if (this.checkIfSelected()) {
      return this.currentRoom.type === 'Cafetaria' || this.currentRoom.type === 'Studyarea';
    }
    return false;
  }

  checkForReservation(): boolean {
    if (this.checkIfSelected()) {
      return this.currentRoom.type === 'Classroom' || this.currentRoom.type === 'Meetingroom'
        || this.currentRoom.type === 'Auditorium';
    } else {
      return false;
    }
  }

  changeListChecked(): void {
    if (!this.listChecked) {
      this.listChecked = true;
    }
  }

  changePlanChecked(): void {
    if (this.listChecked) {
      this.listChecked = false;
    }
  }

  // getCheckBox(cb: string): boolean {
  //   return Boolean(localStorage.getItem(cb));
  // }

  buttonClicked(h: number): void {
    this.currentRoom.hoursReserved = h;
  }

  getRoomsId(): string {
    return this.listChecked ? 'roomsIfList' : 'roomsIfPlan';
  }

  getFilterId(): string {
    return this.listChecked ? 'filterIfList' : 'filterIfPlan';
  }

  getSettingsId(): string {
    return this.listChecked ? 'settingsIfList' : 'settingsIfPlan';
  }
}
