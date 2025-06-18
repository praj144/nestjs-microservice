import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello from GCP microservice!';
  }

  @Post()
  create(@Body() body: any): string {
    return `Received: ${JSON.stringify(body)}`;
  }
}
