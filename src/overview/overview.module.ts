import { Module } from '@nestjs/common';
import { OverviewController } from './overview.controller';
import { ItemService } from '../item/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../item/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [OverviewController],
})
export class OverviewModule { }
