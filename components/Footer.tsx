import * as React from 'react'

import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaStickyNote } from '@react-icons/all-files/fa/FaStickyNote'

import * as config from '@/lib/config'

import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  const pdfSuitable = () => {
    // title
    document.querySelectorAll<HTMLElement>(
      '.notion-page-has-cover'
    )[0].style.cssText = `padding-top: 64px;`

    // image, footer, quote, hr
    const noDisplay = document.querySelectorAll<HTMLElement>(
      'footer, .notion-page-cover-wrapper, .notion-page-icon-hero, .notion-quote, hr'
    )
    Array.from(noDisplay).map((no) => (no.style.cssText = `display: none;`))

    // toggle
    const toggle = document.querySelectorAll<HTMLElement>('.notion-toggle')
    Array.from(toggle).map((t) => t.setAttribute('open', ''))
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>
      <div className={styles.social}>
        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
        {config.linkedin && (
          <a className={styles.linkedin} title={`LinkedIn ${config.author}`}>
            <FaStickyNote
              onClick={() => {
                pdfSuitable()
              }}
            ></FaStickyNote>
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
