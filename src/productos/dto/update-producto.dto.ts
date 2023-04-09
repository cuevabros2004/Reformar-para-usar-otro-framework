import { PartialType } from '@nestjs/mapped-types';
import { ProductsDTO } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(ProductsDTO) {
    _id: string
    title: string
    price: number
    thumbnail: string
}
