import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [HistoryController],
  providers: [ItemService],
})
export class HistoryModule {
}
