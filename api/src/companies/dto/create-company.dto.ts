import { Company } from '@prisma/client';

export type CreateCompanyDto = Omit<Company, 'id'>;
