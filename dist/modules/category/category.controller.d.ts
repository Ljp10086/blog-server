import { CategoryDto } from 'src/db/dtos/category.dto';
import { Common } from 'src/types';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllTags(): Promise<import("../../db/interfaces/category.interface").CategoryInterface[]>;
    getCategoryById(id: string): Promise<import("../../db/interfaces/category.interface").CategoryInterface>;
    create(categoryDto: CategoryDto): Promise<boolean>;
    update(categoryDto: CategoryDto): Promise<boolean>;
    delete({ id }: Common.DeleteParamType): Promise<boolean>;
}
