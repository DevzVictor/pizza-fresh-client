import * as S from "./style";

const ProductItem = () => {
  return (
    <S.ProductItem>
        <S.ProductItemImage src="" alt="" />
        <div>
            <S.ProductItemName>Nome do produto</S.ProductItemName>
            <S.ProductItemDescription>R$ 10.00</S.ProductItemDescription>
            <S.ProductItemPrice>Descrição do produto</S.ProductItemPrice>
        </div>
    </S.ProductItem>
  );
}

export default ProductItem;