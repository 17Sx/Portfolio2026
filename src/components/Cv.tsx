import { Button } from './ui/button'
import { ExternalLinkIcon } from './ui/icons/index'
import { useRef } from 'react'
import type { ExternalLinkIconHandle } from './ui/icons/index'
import { useTranslations } from '../i18n/useTranslations'

export function Cv() {
    const externalLinkIconRef = useRef<ExternalLinkIconHandle>(null)
    const { t, language } = useTranslations()

    return (
        <div id="cv" className='flex flex-col gap-4 w-full mb-10'>
            <h2 className='text-white/50 text-lg md:text-2xl font-light'>{t('cv.title')}</h2>

            <div className='flex flex-col md:flex-row gap-4 md:gap-2 w-full md:justify-between items-start md:items-center'>
                <p className='text-white/60 text-base md:text-lg font-light'>{t('cv.description')}</p>

                <Button
                    asChild
                    className="!bg-white/80 !text-black hover:!bg-white/80 hover:scale-105 transition-all duration-300"
                    onMouseEnter={() => externalLinkIconRef.current?.startAnimation()}
                    onMouseLeave={() => externalLinkIconRef.current?.stopAnimation()}
                >
                    <a
                        href={language === 'en' ? '/cv_en.pdf' : '/cv_fr.pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                    >
                        <ExternalLinkIcon ref={externalLinkIconRef} size={16} />
                        {t('cv.viewResume')}
                    </a>
                </Button>
            </div>
        </div>
    )
}