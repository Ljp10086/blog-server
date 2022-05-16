import { TagDto } from 'src/db/dtos/tag.dto';
import { Common } from 'src/types';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getAllTags(): Promise<import("../../db/interfaces/tag.interface").TagInterface[]>;
    getAllTagById(id: string): Promise<import("../../db/interfaces/tag.interface").TagInterface>;
    create(tagDto: TagDto): Promise<boolean>;
    update(tagDto: TagDto): Promise<boolean>;
    delete({ id }: Common.DeleteParamType): Promise<boolean>;
}
