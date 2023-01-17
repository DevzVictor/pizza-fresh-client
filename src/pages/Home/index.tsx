import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { navigationItems } from "data/navigation";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Aqui ficara a data
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo sabor"></input>
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>detalhes do pedido</p>
      </aside>
    </S.Home>
  );
};

export default Home;
