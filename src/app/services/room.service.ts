import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {delay, retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Room} from '../model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private roomsUrl = 'api/rooms';  // URL to web api (in-memory data service)
  // private roomsUrl = 'http://localhost:3000/rooms';  // URL to web api (node.js data service)

  constructor(private http: HttpClient) {
  }

  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl).pipe(delay(0)); // simulate a slow connection by setting  this number...
  }

  public getRoom(id: number): Observable<Room> {
    const url = `${this.roomsUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  public updateRoom(room: Room): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    console.log(room);
    return this.http.post<Room>(this.roomsUrl, room, httpOptions);
  }
}