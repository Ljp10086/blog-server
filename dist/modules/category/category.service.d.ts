import { Model } from 'mongoose';
import { CategoryDto } from 'src/db/dtos/category.dto';
import { CategoryInterface } from 'src/db/interfaces/category.interface';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryInterface>);
    getCategory(): Promise<CategoryInterface[]>;
    getCategoryById(id: string): Promise<CategoryInterface>;
    create(categoryDto: CategoryDto): Promise<boolean>;
    update(categoryDto: CategoryDto): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
