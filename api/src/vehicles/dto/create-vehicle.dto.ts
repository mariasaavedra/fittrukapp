import { Vehicle } from '@prisma/client';

export type CreateVehicleDto = Omit<Vehicle, 'id'>;
