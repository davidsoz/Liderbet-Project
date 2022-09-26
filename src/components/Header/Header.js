import Checkbox from "../ui/Checkbox/Checkbox";
import menuIcon from '../../images/menu.png';
import rulesIcon from '../../images/rules.png'; 
import * as Styled from './styles';
import { CURRENCY_TYPES } from "../../constants";

function Header({filterItems, onFilterClick, currencies, selectedCurrency, onCurrencyChange, searchValue, onSearch}) {
    return (
        <Styled.Container> 
            <Styled.Checkboxes>
                {
                    filterItems.map(item => <Checkbox key={item.id} label={item.label} onChange={() => onFilterClick(item)}/>)
                }
            
            </Styled.Checkboxes> 
            <Styled.CurrencyType onClick={onCurrencyChange}>
                <div>{currencies?.LBP.code}</div>
                <Styled.Swicher left={selectedCurrency === CURRENCY_TYPES.GEL ? 22 : 2} >
                    <span></span>
                </Styled.Swicher>
                <div>{currencies?.GEL.code}</div>
            </Styled.CurrencyType>
            <Styled.SearchBar>
                <input placeholder="ძებნა" value={searchValue} onChange={e => onSearch(e.target.value)}/>
                <img src={menuIcon} alt="burger menu icon"/>
                <img src={rulesIcon} alt="paper icon"/>
            </Styled.SearchBar>
        </Styled.Container>
    )
}

export default Header;