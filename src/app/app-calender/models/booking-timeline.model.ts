import { BookedModel } from './booked.model';

export interface TimelineModel {
  booked?: BookedModel;
  startPosition?: string;
  endPosition?: string;
}
