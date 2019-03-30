import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {

  constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find({ where: { isArchived: false } });
  }

  async getHistory(take: number, skip: number): Promise<Item[]> {
    return await this.itemRepository.find({ where: { isArchived: true }, take, skip });
  }

  async findOne(id: any): Promise<Item> {
    return await this.itemRepository.findOneOrFail(id);
  }

  async save(item: Item): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async remove(item: Item): Promise<Item> {
    return await this.itemRepository.remove(item);
  }
}
