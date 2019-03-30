import { Controller, Get, Post, Query } from '@nestjs/common';
import { Item } from '../item/item.entity';
import { ItemService } from '../item/item.service';

@Controller('history')
export class HistoryController {

  constructor(private itemService: ItemService) {
  }

  @Get()
  async getAll(@Query() query): Promise<Item[]> {
    return await this.itemService.getHistory(query.take, query.skip);
  }

  @Post()
  async addToHistory(): Promise<void> {
    return await this.itemService.addToHistory();
  }
}
