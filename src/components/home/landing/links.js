import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../link/link';

const routes = {
  contact: '/#contact',
  opportunities: '/#opportunities',
  people: '/people',
  publications: '/publications',
  research: '/#research',
};

const   links = [
  { uri: '/#istoriya', title: 'Вся история' },
  { uri: '/#cel', title: 'Наша цель' },
  { uri: '/#chto', title: 'Что планируется делать'},
  { uri: '/#zaprosy', title: 'Запросы по которым ищут Руслана Черкеса'},
  { uri: '/#proof ', title: 'Подтверждения, скрины переписок'},
  { uri: '/#list', title: 'Список людей которых обманул Руслан Черкес'},
  { uri: '/#dopoln', title: 'Дополнительно (если вас обманули)'},
  { uri: '/#inforuslan', title: 'Данные Руслана Черкеса'},


]
const Links = (
) => (
  links.length > 0
  && (
    <div className="home__landing-links">
      {
        links.map((link) => (
            <Link
              buttonStyle
              key={link.uri}
              nav
              to={link.uri}
            >
              {link.title}
            </Link>
        ))
      }
    </div>
  )
);

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Links;
