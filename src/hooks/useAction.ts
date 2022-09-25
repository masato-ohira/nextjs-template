import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useAction(action: any) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useAction
