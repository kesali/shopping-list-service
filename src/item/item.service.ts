import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {

  constructor(@InjectRepository(Item) private readonly photoRepository: Repository<Item>) {
  }

  async findAll(): Promise<Item[]> {
    return await this.photoRepository.find({ where: { isArchived: false } });
  }

  async findOne(id: any): Promise<Item> {
    return await this.photoRepository.findOneOrFail(id);
  }

  async save(item: Item): Promise<Item> {
    return this.photoRepository.save(item);
  }

  async remove(item: Item): Promise<Item> {
    return await this.photoRepository.remove(item);
  }
}
