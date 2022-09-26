import * as Styled from './styles';

function Checkbox({label, onChange, checked}) {
    return (
        <Styled.Container>
            <input id={label} type='checkbox' onChange={onChange} checked={checked}/>
            <label htmlFor={label}>{label}</label>
        </Styled.Container>
    )
}

export default Checkbox;