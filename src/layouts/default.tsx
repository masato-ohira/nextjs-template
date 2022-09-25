import { ReactElement } from 'react'
import { css } from '@emotion/react'
import { mq } from '@/styles/cmn.styles'
import { useSelector } from 'react-redux'

import { getters, fetchData } from '@/store/sheets'
import useAction from '@/hooks/useAction'
import LoaderContent from '@/components/loader-content'

const styles = () => {
  return css`
    padding: 15px;
    ${mq('md')} {
      padding: 30px 0;
    }
  `
}

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  const ready = useSelector(getters.isReady)
  useAction(fetchData)

  if (!ready) return <LoaderContent />
  return <div css={styles()}>{children}</div>
}

export default Layout
