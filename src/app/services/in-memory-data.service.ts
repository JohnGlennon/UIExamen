import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        id: 1,
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
        y: 0
      },
      {
        id: 2,
        name: 'GR411',
        floor: 4,
        type: 'Cafetaria',
        url: 'https://cdn.onlinewebfonts.com/svg/img_180524.png',
        capacity: 200,
        beamer: false,
        crowd: 75,
        width: 30,
        height: 20,
        x: 30,
        y: 0
      },
      {
        id: 3,
        name: 'GR107',
        floor: 1,
        type: 'Classroom',
        url: 'http://www.icone-png.com/png/54/53749.png',
        capacity: 75,
        beamer: true,
        occupied: true,
        width: 30,
        height: 20,
        x: 60,
        y: 0
      },
      {
        id: 4,
        name: 'GR315',
        floor: 3,
        type: 'Office',
        url: 'http://www.newdesignfile.com/postpic/2010/04/black-office-worker-icon_76222.png',
        capacity: 20,
        beamer: false,
        width: 30,
        height: 20,
        x: 90,
        y: 0
      },
      {
        id: 5,
        name: 'GR501',
        floor: 5,
        type: 'Classroom',
        url: 'http://www.icone-png.com/png/54/53749.png',
        capacity: 50,
        beamer: true,
        occupied: true,
        width: 30,
        height: 10,
        x: 120,
        y: 0
      },
      {
        id: 6,
        name: 'GR511',
        floor: 5,
        type: 'Classroom',
        url: 'http://www.icone-png.com/png/54/53749.png',
        capacity: 100,
        beamer: true,
        occupied: false,
        width: 30,
        height: 30,
        x: 30,
        y: 20
      },
      {
        id: 7,
        name: 'GR208',
        floor: 2,
        type: 'Meetingroom',
        url: 'https://cdn1.iconfinder.com/data/icons/business-proposal-sales-idea-presentation/520/appointment-meeting-012-512.png',
        capacity: 25,
        beamer: false,
        occupied: true,
        width: 30,
        height: 30,
        x: 60,
        y: 20
      },
      {
        id: 8,
        name: 'GR314',
        floor: 3,
        type: 'Classroom',
        url: 'http://www.icone-png.com/png/54/53749.png',
        capacity: 100,
        beamer: true,
        occupied: true,
        width: 20,
        height: 30,
        x: 90,
        y: 20
      },
      {
        id: 9,
        name: 'GR406',
        floor: 4,
        type: 'Classroom',
        url: 'http://www.icone-png.com/png/54/53749.png',
        capacity: 50,
        beamer: false,
        occupied: false,
        width: 15,
        height: 30,
        x: 110,
        y: 20
      },
      {
        id: 10,
        name: 'GR101',
        floor: 1,
        type: 'Cafetaria',
        url: 'https://cdn.onlinewebfonts.com/svg/img_180524.png',
        capacity: 150,
        beamer: false,
        crowd: 100,
        width: 30,
        height: 10,
        x: 120,
        y: 10
      },
      {
        id: 11,
        name: 'The Floor',
        floor: 0,
        type: 'Studyarea',
        url: 'https://www.walton.k12.ga.us/ArticleImages/20183293717201_image.png',
        capacity: 200,
        beamer: false,
        crowd: 100,
        width: 50,
        height: 20,
        x: 30,
        y: 50
      }
    ];
    return {rooms};
  }
}
