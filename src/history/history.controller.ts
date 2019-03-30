import { Controller, Get, Query } from '@nestjs/common';
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
}
