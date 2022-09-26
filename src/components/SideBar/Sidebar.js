import lbIcon from "../../images/lb-icon.png";
import Checkbox from "../ui/Checkbox/Checkbox";
import * as Styled from './styles';
import SidebarItem from "./SidebarItem/SidebarItem";

function Sidebar({menuItems, onCheck, checkedMenuItems}) {
    return (
        <Styled.Container>
            <SidebarItem title="ALL" iconURL={lbIcon} onClick={() => onCheck('ALL')}/>
            {
                menuItems.map(menuItem => (
                    <SidebarItem key={menuItem.id} title={menuItem.label} iconURL={lbIcon} >
                        {
                            menuItem.subItems.map(item => (
                                <Checkbox key={item.id} label={item.label} onChange={() => onCheck(item)} checked={checkedMenuItems.includes(item)}/>
                            ))
                        }
                    </SidebarItem>        
                ))
            }
        </Styled.Container>
    )
}

export default Sidebar;