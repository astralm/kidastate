import React from 'react';
import { Link, hashHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import 'jquery-slimscroll/jquery.slimscroll.min';


class SidebarContent extends React.Component {

  componentDidMount() {
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });


    // Append icon to submenu
    // Append to child `div`
    $nav.find('.prepend-icon').children('div').prepend('<i class="material-icons">keyboard_arrow_right</i>');


    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul"></i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', (e) => {

      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');


      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);

    });


    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = hashHistory.getCurrentLocation();

    function highlightActive(pathname) {
      const path = `#${pathname}`;



      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    hashHistory.listen((location) => {
      highlightActive(location.pathname);
    });
  }


  render() {
      const FlatStyle = {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      };
      const DisplayBlock = {
          display:'block'
      };

    return (
        <ul className="nav" ref={(c) => { this.nav = c; }}>
          <li className="open">
            <FlatButton href="#/app/menu">
              <div style={FlatStyle}>
                <i className="nav-icon material-icons">settings</i>
                <span className="nav-text">Управленческий блок</span>
              </div>
            </FlatButton>
            <ul style={DisplayBlock}>
              <li>
                <FlatButton className="prepend-icon" href="javascript:;">
                  <span>Сотрудники</span>
                </FlatButton>
                <ul style={DisplayBlock}>
                  <li><FlatButton href="javascript:;"><span>Структура компании</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span>Список всех сотрудников</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span>Создание нового сотрудника</span></FlatButton></li>
                </ul>
              </li>
              <li>
                <FlatButton className="prepend-icon" href="javascript:;">
                  <span>Профили детей</span>
                </FlatButton>
                <ul style={DisplayBlock}>
                  <li><FlatButton href="javascript:;"><span>Общий список всех детей</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span>Таблица маркеров</span></FlatButton></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="open">
            <FlatButton href="#/app/menu" >
              <div style={FlatStyle}>
                <i className="nav-icon material-icons">people
                </i>
                <span className="nav-text"> Административный блок</span>
              </div>
            </FlatButton>
            <ul style={DisplayBlock}>
              <li>
                <FlatButton className="prepend-icon" href="javascript:;">
                  <span>График отсутствия</span>
                </FlatButton>
                <ul style={DisplayBlock}>
                  <li><FlatButton href="javascript:;"><span>Список детей</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span> Архив документов</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span> Архив Фотографий</span></FlatButton></li>
                  <li><FlatButton href="javascript:;"><span> Архив Видео</span></FlatButton></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <FlatButton href="#/app/menu">
              <div style={FlatStyle}>
                <i className="nav-icon material-icons">sort</i>
                <span className="nav-text">Диагностика</span>
              </div>
            </FlatButton>
          </li>
        </ul>
    );
  }
}

module.exports = SidebarContent;
