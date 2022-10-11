import { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { selectors, fetchData } from '@/store/sheets'
import useAction from '@/hooks/useAction'
import LoaderContent from '@/components/loader-content'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  const ready = useSelector(selectors.isReady)
  useAction(fetchData)

  if (!ready) return <LoaderContent />
  return <div>{children}</div>
}

export default Layout
