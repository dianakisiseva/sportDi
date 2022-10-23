import React from 'react'
import {
  IconHome
  , IconProfile
} from './../Icons'
import { Link } from '../../utils'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'

const Navigation = () => {
  const { url } = usePage().props
  const { t } = useTranslation()

  return (
    <nav className='aside-menu-navigation__main'>
      <ul className='aside-menu-navigation__list'>
        <li className='aside-menu-navigation__list-item'>
          <Link href='/' url={url} className='aside-menu-navigation__anchor'>
            <IconHome className='aside-menu-navigation__icon' />
            <span className='aside-menu-navigation__text'>
              {t('ui.homepage')}
            </span>
          </Link>
        </li>
        <li className='aside-menu-navigation__list-item'>
          <Link href='/users' url={url} className='aside-menu-navigation__anchor'>
            <IconHome className='aside-menu-navigation__icon' />
            <span className='aside-menu-navigation__text'>
              {t('ui.users')}
            </span>
          </Link>
        </li>
        <li className='aside-menu-navigation__list-item'>
          <div className='aside-menu-navigation__anchor have-submenu'>
            <IconProfile className='aside-menu-navigation__icon' />
            <span className='aside-menu-navigation__text'>
              {t('marketplace.singular')}
            </span>
            <ul className='aside-menu-navigation__level-two-list'>
              <li className='aside-menu-navigation__level-two-list-item'>
                <Link href='/marketplace-users' url={url} className='aside-menu-navigation__anchor-level-two'>
                  <span className='aside-menu-navigation__text-level-two'>
                    {t('marketplace.users.plural')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
