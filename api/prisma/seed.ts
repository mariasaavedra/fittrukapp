import { PrismaClient, User, Role, Company, Event } from '@prisma/client';
import { faker } from '@faker-js/faker';
import fetch from 'node-fetch';
// import sport from '@fakerjs/sport';

const prisma = new PrismaClient();

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

async function main() {
  const seedRoles = async (): Promise<void> => {
    console.log('seeding roles...');
    // generate roles
    const roles = [
      { label: 'super_admin' }, // id ->  1
      { label: 'admin' }, // 2
      { label: 'member' }, // 3
      { label: 'trainer' }, // 4
    ];
    await prisma.role.createMany({ data: roles, skipDuplicates: true });
  };

  // create two companies
  const seedCompanies = async (): Promise<void> => {
    console.log('seeding companies...');
    // generate roles
    const companies = [{ label: 'Fittruk' }, { label: 'OtherTruk' }];
    try {
      await prisma.company.createMany({
        data: companies,
        skipDuplicates: true,
      });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  // create two vehicles
  const seedVehicles = async (): Promise<void> => {
    console.log('seeding vehicles...');
    // generate roles
    const vehicles = [
      {
        label: 'Fittruk',
        dot_number: 123,
        plate_number: '001',
        company_id: 1,
      },
      {
        label: 'OtherTruk',
        dot_number: 345,
        plate_number: '002',
        company_id: 2,
      },
    ];

    try {
      await prisma.vehicle.createMany({ data: vehicles, skipDuplicates: true });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  const seedMembers = async (): Promise<void> => {
    console.log('seeding members...');
    const users = [];
    // generate members
    for (let i = 0; i < 25; i++) {
      users.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password',
        city: 'Kansas City',
        state: 'Missouri',
        zip: '64108',
        dob: faker.date.birthdate(),
        role_id: 3,
      });
    }
    // generate trainers
    for (let i = 0; i < 25; i++) {
      users.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password',
        city: 'Kansas City',
        state: 'Missouri',
        zip: '64108',
        dob: faker.date.birthdate(),
        role_id: 4,
      });
    }
    // generate admin
    for (let i = 0; i < 2; i++) {
      users.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password',
        city: 'Kansas City',
        state: 'Missouri',
        zip: '64108',
        dob: faker.date.birthdate(),
        role_id: 2,
      });
    }
    // super admin
    users.push({
      first_name: 'Maria',
      last_name: 'Saavedra',
      email: 'msaav3@gmail.com',
      password: 'password',
      city: 'Kansas City',
      state: 'Missouri',
      zip: '64108',
      dob: '03/16/1996',
      role_id: 1,
    });

    users.push({
      first_name: 'Maria',
      last_name: 'Saavedra',
      email: 'maria@advadigitalsolutions.com',
      password: 'password',
      city: 'Kansas City',
      state: 'Missouri',
      zip: '64108',
      dob: '03/16/1996',
      role_id: 3,
    });

    try {
      await prisma.user.createMany({ data: users, skipDuplicates: true });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  // create several events
  const seedEvents = async (): Promise<void> => {
    console.log('seeding events...');
    const events = [];
    for (let i = 0; i < 25; i++) {
      events.push({
        title: 'Kickboxing',
        capacity: '10',
        company_id: '0',
        cover_url: faker.image.sports(),
        description: faker.lorem.sentence(),
        price: '10.00',
        skill_level: 'Expert',
        end_time: tomorrow,
        start_time: tomorrow,
        type: 'HIT',
        trainer_id: 26,
      });
    }
    await prisma.event.createMany({ data: events, skipDuplicates: true });
  };

  await seedRoles();
  await seedCompanies();
  await seedVehicles();
  await seedMembers();
  await seedEvents();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
