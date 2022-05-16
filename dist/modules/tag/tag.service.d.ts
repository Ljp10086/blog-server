import { Model } from 'mongoose';
import { TagDto } from 'src/db/dtos/tag.dto';
import { TagInterface } from 'src/db/interfaces/tag.interface';
export declare class TagService {
    private readonly tagModel;
    constructor(tagModel: Model<TagInterface>);
    getAllTags(): Promise<TagInterface[]>;
    getAllTagById(id: string): Promise<TagInterface>;
    create(tagDto: TagDto): Promise<boolean>;
    update(tagDto: TagDto): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
