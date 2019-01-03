import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../model/room';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() room: Room;

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id)
      .subscribe(room => this.room = room);
  }

  save(): void {
    this.roomService.updateRoom(this.room);
  }

  occupiedPresent(): boolean {
    return this.room.occupied != null;
  }

  crowdPresent(): boolean {
    return this.room.crowd != null;
  }
}
