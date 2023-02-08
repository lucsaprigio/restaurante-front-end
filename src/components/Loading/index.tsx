import ReactLoading from 'react-loading';

import {
    Container,
    Text,
} from './styles';

export function Loading() {
    return (
        <Container>
            <ReactLoading type={'spin'} color={'#00008B'}/>
            <Text>
                Carregando...
            </Text>
        </Container>
    )
}