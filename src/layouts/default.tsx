import { ReactElement } from 'react'
// import Header from '@/layouts/header'
// import FooterMenu from '@/components/footer/footer-menu'
import styles from './default.module.sass'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.default}>
      {children}
      {/* <FooterMenu /> */}
    </div>
  </>
)

export default Layout
