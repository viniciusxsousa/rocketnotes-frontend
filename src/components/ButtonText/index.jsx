import { Conteiner } from './styles'

export function ButtonText({title, isActived = false ,...rest}) {
    return (
        <Conteiner
            type='button'
            $isactived = {isActived.toString()}
            {...rest}
        >
            {title}
        </Conteiner>
    )
}