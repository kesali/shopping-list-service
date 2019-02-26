import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller('item')
export class ItemController {

  constructor(private itemService: ItemService) {
  }

  @Get()
  async getItem(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  @Get(':id')
  async getItemById(@Param() params): Promise<Item> {
    return await this.itemService.findOne(params.id);
  }

  @Post()
  async createItem(@Body() item: Item): Promise<Item> {
    return await this.itemService.save(item);
  }

  @Patch(':id')
  async updateItem(@Param() params, @Body() updatedItem: Item): Promise<Item> {
    const item = await this.itemService.findOne(params.id);

    item.name = updatedItem.name;
    item.isCompleted = updatedItem.isCompleted;
    item.isArchived = updatedItem.isArchived;

    return await this.itemService.save(item);
  }

  @Delete(':id')
  async deleteItem(@Param() params): Promise<Item> {
    const item = await this.itemService.findOne(params.id);

    return await this.itemService.remove(item);
  }
}
