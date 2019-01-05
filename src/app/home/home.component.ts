import {Component, OnInit} from '@angular/core';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rooms = [];
  // roomIndex = 0;

  error = false;

  public currentFloor;
  public currentRoom;

  public listChecked;

  // public roomClicked;

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

    // localStorage.setItem('nameChecked', 'true');
    // console.log(Boolean(localStorage.getItem('nameChecked')));
    // localStorage.setItem('typeChecked', 'true');
    // console.log(Boolean(localStorage.getItem('typeChecked')));
    // localStorage.setItem('capacityChecked', 'false');
    // console.log(Boolean(localStorage.getItem('capacityChecked')));
    // localStorage.setItem('beamerChecked', 'false');
    // console.log(Boolean(localStorage.getItem('beamerChecked')));
    // localStorage.setItem('occupiedChecked', 'true');
    // console.log(Boolean(localStorage.getItem('occupiedChecked')));
    // localStorage.setItem('crowdChecked', 'true');
    // console.log(Boolean(localStorage.getItem('crowdChecked')));

    this.nameChecked = true;
    this.typeChecked = true;
    this.capacityChecked = false;
    this.beamerChecked = false;
    this.occupiedChecked = true;
    this.crowdChecked = true;

    // this.nameChecked = Boolean(localStorage.getItem('nameChecked'));
    // this.typeChecked = Boolean(localStorage.getItem('typeChecked'));
    // this.capacityChecked = Boolean(localStorage.getItem('capacityChecked'));
    // this.beamerChecked = Boolean(localStorage.getItem('beamerChecked'));
    // this.occupiedChecked = Boolean(localStorage.getItem('occupiedChecked'));
    // this.crowdChecked = Boolean(localStorage.getItem('crowdChecked'));

    this.colorNotOccupied = '#00ff00';
    this.colorOccupied = '#ff0000';

    this.timeout = null;
    this.reservationTimeout = null;
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

  roomOrSettingClicked(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.currentRoom = null, 5000);
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

  buttonClicked(hours: number): void {
    if (!this.currentRoom.occupied) {
      this.currentRoom.hoursReserved = hours;
      this.currentRoom.occupied = true;
      this.reservationTimeout = setTimeout(() => this.currentRoom.occupied = false, hours * 1000);
    } else {
      this.currentRoom.hoursReserved = -1;
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

  // changeCheckBox(filter: string): void {
  //   switch (filter) {
  //     case 'nameChecked':
  //       localStorage.setItem(filter, String(this.nameChecked));
  //       break;
  //     case 'typeChecked':
  //       localStorage.setItem(filter, String(this.typeChecked));
  //       break;
  //     case 'capacityChecked':
  //       localStorage.setItem(filter, String(this.capacityChecked));
  //       break;
  //     case 'beamerChecked':
  //       localStorage.setItem(filter, String(this.beamerChecked));
  //       break;
  //     case 'occupiedChecked':
  //       localStorage.setItem(filter, String(this.occupiedChecked));
  //       break;
  //     case 'crowdChecked':
  //       localStorage.setItem(filter, String(this.crowdChecked));
  //       break;
  //   }
  // }
}
