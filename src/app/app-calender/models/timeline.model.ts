import { BookedModel } from './booked.model';
import { TimelineDateModel } from './timeline-date.model';

export interface TimelineModel {
  booked?: BookedModel;
  startDate?: TimelineDateModel;
  endDate?: TimelineDateModel;
}
