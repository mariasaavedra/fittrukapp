import { Event } from '@prisma/client';

export type CreateEventDto = Omit<Event, 'id'>;
