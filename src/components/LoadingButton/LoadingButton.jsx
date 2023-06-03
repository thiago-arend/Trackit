import { ThreeDots } from 'react-loader-spinner'

export default function LoadingButton(props) {
    const { disabled, texto, type, funcaoClick, width, height } = props;

    return (

        <button disabled={disabled} type={type} onClick={funcaoClick}>
            <ThreeDots
                height={height}
                width={width}
                radius="9"
                color="#FFF"
                ariaLabel="three-dots-loading"
                visible={(disabled) ? true : false}
            />
            {(!disabled) && texto}
        </button>
    )
}