import { Controller, Get } from '@nestjs/common';
import { ItemService } from '../item/item.service';

@Controller('overview')
export class OverviewController {
    constructor(private itemService: ItemService) {
    }

    @Get()
    async overview() {
        return await this.itemService.overview();
    }
}
