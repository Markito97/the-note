import { Controller, Post } from '@nestjs/common';
import { TableService } from './table.service';
import { Get, Param, Req } from '@nestjs/common/decorators';
import { Request } from 'express';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Post('create')
  async createTable(@Req() req: Request) {
    return await this.tableService.createTable(req.body);
  }

  @Get('/:id')
  async getTable(@Param('id') id: any) {
    return this.tableService.getTable(id);
  }
}
