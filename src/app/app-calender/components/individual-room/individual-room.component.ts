import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { TimelineControlService } from 'src/app/shared-services/timeline-control.service';
import { RoomBookComponent } from '../../modals/room-book/room-book.component';
import { BookedModel } from '../../models/booked.model';
import { DayModel } from '../../models/day.model';
import { RoomModel } from '../../models/room.model';
import { TimelineModel } from '../../models/timeline.model';
import { TimelineService } from '../../services/timeline.service';
import * as lds from 'lodash-es';
import { RootlineDialogModule, RootlineModalService } from 'rootline-dialog';
import { RoomApiService } from '../../services/room-api.service';
import { StateControlService } from 'src/app/shared-services/state-control.service';

@Component({
  selector: 'individual-room',
  templateUrl: './individual-room.component.html',
  styleUrls: ['./individual-room.component.scss'],
})
export class IndividualRoomComponent {
  @Input() hotelRoom: RoomModel;
  @Input() calendarDates: DayModel[];
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  timelines: TimelineModel[];

  constructor(
    private timlineService: TimelineService,
    private timelineControler: TimelineControlService,
    private dialog: MatDialog,
    private caledarControl: CalendarControlService,
    private rootlineModal: RootlineModalService,
    private roomApiService: RoomApiService,
    private stateControler:StateControlService
  ) {}

  ngOnInit(): void {
    this.cancelButton = this.cancelButton.bind(this);
    this.deleteRoomNow = this.deleteRoomNow.bind(this);
    this.updateTimeline();
    this.deleteTimeline();
    this.updateCalendarData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let timeline = this.timlineService.getTimelineStartEnd(
      this.hotelRoom,
      this.calendarDates
    );

    this.timelines = Array.from(timeline);
  }

  bookRoom(date: any) {
    this.dialog.open(RoomBookComponent, {
      width: 'auto',
      panelClass: 'modal-body',
      data: { date: date, data: this.hotelRoom },
    });
  }

  updateTimeline() {
    let currentData: Partial<BookedModel> = {};
    let updateData: Partial<TimelineModel> = {};
    this.timelineControler.timlineUpdate$.subscribe((res) => {
      updateData = res.current;
      currentData = res.previous;

      if (this.hotelRoom.id != currentData.roomId) return;
      this.hotelRoom.bookedRooms = this.hotelRoom.bookedRooms.map((line) => {
        if (
          line.bookingId == currentData.bookingId &&
          line.roomId == currentData.roomId
        ) {
          return updateData.booked;
        }
        return line;
      });

      this.timelines = this.timlineService.getTimelineStartEnd(
        this.hotelRoom,
        this.calendarDates
      );
    });
  }

  deleteTimeline() {
    this.timelineControler.timelineDelete$.subscribe((res) => {
      let timeline: TimelineModel = res;
      let bookingId = timeline.booked.bookingId;
      if (this.hotelRoom.id != timeline.booked.roomId) return;
      this.hotelRoom.bookedRooms = this.hotelRoom.bookedRooms.filter(
        (booked) => {
          if (bookingId != booked.bookingId) {
            return booked;
          }
        }
      );
    });
  }

  updateCalendarData() {
    let booking: any;

    this.caledarControl.calendarUpdate$.subscribe((res) => {
      booking = res;
      this.mapBookingData(booking);
    });
  }

  mapBookingData(data: any) {
    let bookings: Partial<BookedModel> = {};
    bookings.booking = lds.cloneDeep(data);
    bookings.booking.bookedRoom = [];
    data.bookedRoom.forEach((booked) => {
      if (booked.roomId == this.hotelRoom.id) {
        bookings.bookingId = booked.bookingId;
        bookings.roomId = booked.roomId;

        this.hotelRoom.bookedRooms.push(bookings as BookedModel);
        this.timelines = this.timlineService.getTimelineStartEnd(
          this.hotelRoom,
          this.calendarDates
        );
      }
    });

    return bookings;
  }

  deleteRoom(){
    this.rootlineModal.openConfirmationModal({
      type:"warn",
      matIcon:"delete_forever",
      headerText:"Do you want to delete this room ?",
      description: `This room will be deleted permanantly. 
      You won't be able to retrieve this room again.
      But the related booking data will still be available.`,
      primaryButtonName:"Yes",
      secondaryButtonName:"No",
      modalWidth:"550px",
      primaryEvent:this.deleteRoomNow,
      secondaryEvent:this.cancelButton
    })
  }

  deleteRoomNow(){
    this.rootlineModal.dispose();
    this.roomApiService.deleteRoom(this.hotelRoom).subscribe(res => {
      this.stateControler.deleteRoomSignal(this.hotelRoom);
    }, err => {
        this.rootlineModal.openConfirmationModal({
          type: "error",
          matIcon: "error_outline",
          headerText: "Room deletion failed",
          primaryButtonName: "Try again",
          primaryEvent:this.cancelButton
        })
    })
  }

  cancelButton(){
    this.rootlineModal.dispose();
  }

  editRoom(){

  }
}
