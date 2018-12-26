import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roomSet = [
    {
      name: 'GR001',
      floor: 0,
      type: 'Auditorium',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Auditorium_icon.svg/1000px-Auditorium_icon.svg.png',
      capacity: 300,
      beamer: true,
      occupied: true,
      width: 30,
      height: 30,
      x: 0,
      y: 500
    },
    {
      name: 'GR411',
      floor: 4,
      type: 'Cafetaria',
      url: 'https://cdn.onlinewebfonts.com/svg/img_180524.png',
      capacity: 200,
      beamer: false,
      crowd: 75,
      width: 30,
      height: 20,
      x: 1000,
      y: 200
    },
    {
      name: 'GR107',
      floor: 1,
      type: 'Classroom',
      url: 'http://www.icone-png.com/png/54/53749.png',
      capacity: 75,
      beamer: true,
      occupied: true,
      width: 10,
      height: 20,
      x: 500,
      y: 400
    },
    {
      name: 'GR315',
      floor: 3,
      type: 'Office',
      url: 'http://www.newdesignfile.com/postpic/2010/04/black-office-worker-icon_76222.png',
      capacity: 20,
      beamer: false,
      width: 10,
      height: 20,
      x: 0,
      y: 0
    },
    {
      name: 'GR501',
      floor: 5,
      type: 'Classroom',
      url: 'http://www.icone-png.com/png/54/53749.png',
      capacity: 50,
      beamer: true,
      occupied: true,
      width: 20,
      height: 10,
      x: 1000,
      y: 1000
    },
    {
      name: 'GR511',
      floor: 5,
      type: 'Classroom',
      url: 'http://www.icone-png.com/png/54/53749.png',
      capacity: 100,
      beamer: true,
      occupied: false,
      width: 30,
      height: 30,
      x: 300,
      y: 200
    },
    {
      name: 'GR208',
      floor: 2,
      type: 'Meetingroom',
      url: 'https://cdn1.iconfinder.com/data/icons/business-proposal-sales-idea-presentation/520/appointment-meeting-012-512.png',
      capacity: 25,
      beamer: false,
      occupied: true,
      width: 30,
      height: 30,
      x: 700,
      y: 300
    },
    {
      name: 'GR314',
      floor: 3,
      type: 'Classroom',
      url: 'http://www.icone-png.com/png/54/53749.png',
      capacity: 100,
      beamer: true,
      occupied: true,
      width: 20,
      height: 30,
      x: 600,
      y: 600
    },
    {
      name: 'GR406',
      floor: 4,
      type: 'Classroom',
      url: 'http://www.icone-png.com/png/54/53749.png',
      capacity: 50,
      beamer: false,
      occupied: false,
      width: 15,
      height: 30,
      x: 700,
      y: 200
    },
    {
      name: 'GR101',
      floor: 1,
      type: 'Cafetaria',
      url: 'https://cdn.onlinewebfonts.com/svg/img_180524.png',
      capacity: 150,
      beamer: false,
      crowd: 100,
      width: 30,
      height: 10,
      x: 500,
      y: 500
    },
    {
      name: 'The Floor',
      floor: 0,
      type: 'Studyarea',
      url: 'https://www.walton.k12.ga.us/ArticleImages/20183293717201_image.png',
      capacity: 200,
      beamer: false,
      crowd: 100,
      width: 50,
      height: 20,
      x: 1000,
      y: 500
    }
  ];

  private rooms = [];
  // roomIndex = 0;

  public currentFloor = 0;

  public listChecked;

  public roomClicked;

  public nameChecked;
  public typeChecked;
  public capacityChecked;
  public beamerChecked;
  public occupiedChecked;
  public crowdChecked;

  @Input() crowd;

  ngOnInit(): void {
    for (let i = 0; i < this.roomSet.length; i++) {
      this.rooms.push(this.roomSet[i]);
    }

    this.listChecked = true;

    this.roomClicked = false;

    this.nameChecked = true;
    this.typeChecked = true;
    this.capacityChecked = false;
    this.beamerChecked = false;
    this.occupiedChecked = true;
    this.crowdChecked = true;
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

  setRoomClicked(): void {
    this.roomClicked = !this.roomClicked;
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

  changeNameChecked(): void {
    this.nameChecked = !this.nameChecked;
  }

  changeTypeChecked(): void {
    this.typeChecked = !this.typeChecked;
  }

  changeCapacityChecked(): void {
    this.capacityChecked = !this.capacityChecked;
  }

  changeBeamerChecked(): void {
    this.beamerChecked = !this.beamerChecked;
  }

  changeOccupiedChecked(): void {
    this.occupiedChecked = !this.occupiedChecked;
  }

  changeCrowdChecked(): void {
    this.crowdChecked = !this.crowdChecked;
  }
}
