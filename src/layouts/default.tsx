import { ReactElement } from 'react'
import { css } from '@emotion/react'
import { mq } from '@/styles/cmn.styles'

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

const Layout = ({ children }: LayoutProps) => (
  <>
    <div css={styles()}>{children}</div>
  </>
)

export default Layout
