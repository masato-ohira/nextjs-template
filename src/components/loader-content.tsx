import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

interface propsTypes {
  color?: string
}

const LoaderContent = ({ color = colors.text }: propsTypes) => {
  const styles = {
    loader: css`
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;

      > div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      > div > div {
        background-color: ${color};
        opacity: 0.15;
      }
    `,
  }

  return (
    <div css={styles.loader}>
      <div className='ball-pulse'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoaderContent
