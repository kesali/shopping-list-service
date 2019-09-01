import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import { HistoryModule } from './history/history.module';
import { OverviewModule } from './overview/overview.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite3',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), ItemModule, HistoryModule, OverviewModule],
})
export class AppModule {
}
