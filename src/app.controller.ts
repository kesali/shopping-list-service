import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('item')
export class AppController {
  constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {
  }

  @Get()
  async getItem(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  @Get(':id')
  async getItemById(@Param() params): Promise<Item> {
    return await this.itemRepository.findOneOrFail(params.id);
  }

  @Post()
  async createItem(@Body() item: Item): Promise<Item> {
    return await this.itemRepository.save(item);
  }

  @Patch(':id')
  async updateItem(@Param() params, @Body() updatedItem: Item): Promise<Item> {
    const item = await this.itemRepository.findOneOrFail(params.id);

    item.name = updatedItem.name;
    item.isCompleted = updatedItem.isCompleted;
    item.isArchived = updatedItem.isArchived;

    return await this.itemRepository.save(item);
  }

  @Delete(':id')
  async deleteItem(@Param() params): Promise<Item> {
    const item = await this.itemRepository.findOneOrFail(params.id);

    return await this.itemRepository.remove(item);
  }
}
