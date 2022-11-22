import { CitiesList } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index';
import { changeCity } from '../../store/action';

type TabsListProps = {
  citiesList: typeof CitiesList;
}

function TabsList({citiesList}: TabsListProps) {

  const cities = Object.keys(citiesList);

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it: string) => (
            <li
              className="locations__item"
              key={it}
            >
              <Link
                className="locations__item-link tabs__item"
                to="#"
                onClick={() => dispatch(changeCity({value: it}))}
              >
                <span>{it}</span>
              </Link>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default TabsList;