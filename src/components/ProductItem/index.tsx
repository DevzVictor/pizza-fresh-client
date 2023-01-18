import * as S from "./style";
import { ProductResponse } from "types/Product";

type ProductItemProps = {
  product: ProductResponse
  onSelect: (data: ProductResponse) => void
}

const ProductItem = ({product, onSelect}: ProductItemProps) => {
  return (
    <S.ProductItem role='listitem' onClick={()=> onSelect(product)}>
        <S.ProductItemImage src={product.image} alt={`Pizza de ${product.name}`} />
        <div>
            <S.ProductItemName>{product.name}</S.ProductItemName>
            <S.ProductItemDescription>{product.description}</S.ProductItemDescription>
            <S.ProductItemPrice>{product.price}</S.ProductItemPrice>
        </div>
    </S.ProductItem>
  );
}

export default ProductItem;