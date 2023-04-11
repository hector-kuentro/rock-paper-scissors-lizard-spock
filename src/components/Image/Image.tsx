import { FC, ImgHTMLAttributes } from 'react'

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <img
            {...props}
            alt={props.alt || ''}
            onDragStart={e => e.preventDefault()}
        />
    )
}

export default Image