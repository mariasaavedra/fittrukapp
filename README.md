# Fittruk Web Application

This is a web application for Fittruk, a mobile gym service company. The application allows guests and members to sign up for classes, and owners and trainers to manage programs.

## Technology Stack

The application is built using the following technologies:

- **[Next.js](https://nextjs.org/)** - A React-based framework for building server-side rendered web applications.
- **[Tailwind](https://tailwindcss.com/)** - A utility-first CSS framework that provides a set of pre-defined styles and classes to make designing web pages faster and more efficient.
- **[Postgres](https://www.postgresql.org/)** - A powerful open-source relational database management system.
- **[Prisma](https://www.prisma.io/)** - An ORM (Object-Relational Mapping) tool for database access that provides a type-safe and efficient client for the application's database.
- **[Nest.js](https://nestjs.com/)** - A framework for building scalable, modular applications with Node.js.
- **[Docker](https://www.docker.com/)** - A platform for developing, deploying, and running applications using containers.

The application also integrates with the following third-party services:

- **[Stych](https://www.stych.io/)** - Provides a secure authentication system for members and trainers.
- **[SendGrid](https://sendgrid.com/)** - Sends automated emails to members regarding class schedules, reminders, and updates.
- **[Twilio](https://www.twilio.com/)** - Sends SMS notifications to members for class reminders, updates, and cancellations.
- **[Stripe](https://stripe.com/)** - Handles the payment processing system for members to buy class spots.

## Project Structure

The project is divided into three main folders:

1. `api`: This folder contains the Nest.js server that serves as the API for the application. It also includes the integration code for the third-party services.
2. `client`: This folder contains the Next.js client-side code for the application.
3. `shared`: This folder contains code that is shared between the API and client-side code.

## Getting Started

To get started with the project, you will need to have the following tools installed:

- Node.js (version 16 or higher)
- Docker

After cloning the repository, navigate to the project root and run the following commands to start the application:

`docker-compose up`

## Code Examples

### Prisma Query Example

Here's an example of how to use Prisma to write a query to retrieve a list of classes from the database:

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getClasses() {
  const classes = await prisma.class.findMany();
  return classes;
}
```

In this example, we first import the `PrismaClient` from the `@prisma/client` package. Then, we create a new instance of the `PrismaClient`. Finally, we write an asynchronous function `getClasses()` that uses the `findMany()` method to retrieve all classes from the database.


### NestJS Route Example
Here's an example of how to create a route in NestJS to retrieve a list of classes:

```ts
import { Controller, Get } from "@nestjs/common";
import { Class } from "./class.model";

@Controller("classes")
export class ClassController {
  @Get()
  async getAllClasses(): Promise<Class[]> {
    // code to retrieve list of classes using Prisma
    return classes;
  }
}
```

In this example, we define a ClassController that represents the API endpoint for retrieving a list of classes. We use the `@Controller` decorator to specify the URL path for the endpoint. We define a `@Get` method that returns a Promise of an array of Class objects. Inside the `getAllClasses()` method, we write the code to retrieve the list of classes using Prisma.
