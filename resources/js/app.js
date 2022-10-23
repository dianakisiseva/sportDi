import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ToastProvider } from 'react-toast-notifications'
import 'regenerator-runtime/runtime'

const el = document.getElementById('app')

/**
 * page data init
 */
const initialPageData = JSON.parse(el.dataset.page)

/**
 * ie8n init
 */
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            [initialPageData.props.app.locale]: {
                translation: initialPageData.props.translations
            }
        },
        lng: initialPageData.props.app.locale,
        returnObjects: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./domain/${name}`),
    setup ({ el, App, props }) {
        render(
            <ToastProvider autoDismiss>
                <App {...props} />
            </ToastProvider>
            , el,
            () => {
                /**
                 * Set disease color
                 */
                const colorPrimary = '2f701e'
                const colorSecondary = '2f701e'

                document.documentElement.style
                    .setProperty('--color-primary', `#${colorPrimary}`)
                document.documentElement.style
                    .setProperty('--color-secondary', `#${colorSecondary}`)
            }
        )
    }
})
