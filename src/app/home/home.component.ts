import {Component, OnInit} from '@angular/core';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rooms = [];

  error = false;

  private maxFloor;
  public currentFloor;
  public currentRoom;

  public listChecked;

  public nameChecked: boolean;
  public typeChecked: boolean;
  public capacityChecked: boolean;
  public beamerChecked: boolean;
  public occupiedChecked: boolean;
  public crowdChecked: boolean;

  public colorNotOccupied;
  public colorOccupied;

  public timeout;
  public reservationTimeout;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
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

    this.maxFloor = 0;

    this.currentFloor = 0;
    this.currentRoom = null;

    this.nameChecked = this.stringToBoolean(localStorage.getItem('nameChecked'));
    this.typeChecked = this.stringToBoolean(localStorage.getItem('typeChecked'));
    this.capacityChecked = this.stringToBoolean(localStorage.getItem('capacityChecked'));
    this.beamerChecked = this.stringToBoolean(localStorage.getItem('beamerChecked'));
    this.occupiedChecked = this.stringToBoolean(localStorage.getItem('occupiedChecked'));
    this.crowdChecked = this.stringToBoolean(localStorage.getItem('crowdChecked'));

    this.colorNotOccupied = '#00ff00';
    this.colorOccupied = '#ff0000';

    this.timeout = null;
    this.reservationTimeout = null;
  }

  private stringToBoolean(s: string): boolean {
    return s === 'true';
  }

  private booleanToString(b: boolean): string {
    return b ? 'true' : 'false';
  }

  floorDown(): void {
    if (this.currentFloor > 0) {
      this.currentFloor--;
    }
  }

  floorUp(): void {
    for (const room of this.rooms) {
      if (room.floor > this.maxFloor) {
        this.maxFloor = room.floor;
      }
    }
    if (this.currentFloor < this.maxFloor) {
      this.currentFloor++;
    }
  }

  setRoomClicked(currentRoomIndex): void {
    this.currentRoom = this.rooms[currentRoomIndex];
  }

  roomOrSettingClicked(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.currentRoom = null, 7000);
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

  buttonClicked(hours: number): void {
    if (!this.currentRoom.occupied) {
      this.currentRoom.hoursReserved = hours;
      this.currentRoom.occupied = true;
      this.reservationTimeout = setTimeout(() => this.currentRoom.occupied = false, hours * 1000);
    }
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

  changeCheckBox(filter: string): void {
    switch (filter) {
      case 'nameChecked':
        localStorage.setItem(filter, this.booleanToString(this.nameChecked));
        break;
      case 'typeChecked':
        localStorage.setItem(filter, this.booleanToString(this.typeChecked));
        break;
      case 'capacityChecked':
        localStorage.setItem(filter, this.booleanToString(this.capacityChecked));
        break;
      case 'beamerChecked':
        localStorage.setItem(filter, this.booleanToString(this.beamerChecked));
        break;
      case 'occupiedChecked':
        localStorage.setItem(filter, this.booleanToString(this.occupiedChecked));
        break;
      case 'crowdChecked':
        localStorage.setItem(filter, this.booleanToString(this.crowdChecked));
        break;
    }
  }
}
