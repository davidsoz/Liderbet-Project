import { useEffect, useMemo, useRef, useState } from "react";

import { getData } from "../api/api";

import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";
import Slot from "../components/Slot/Slot";

import * as Styled from './styles';
import TooltipSlider from "../components/ui/TooltipSlider/TooltipSlider";
import { buildDateTime, calculateDiscountedPrice } from "../helpers";
import { CURRENCY_TYPES, IMAGE_URLS } from "../constants";

function App() {
    const [data, setData] = useState({});
    const [checkedMenuItems, setCheckedMenuItems] = useState([]);
    const [checkedFilterItems, setCheckedFilterItems] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_TYPES.GEL);
    const [searchValue, setSearvhValue] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const allMenuItemsRef = useRef([]);

    function checkHandler(menuItem) {
        if(menuItem === 'ALL') {
            setCheckedMenuItems(allMenuItemsRef.current);
            return;
        }
        let nextCheckedMenuItems = [...checkedMenuItems];
        let index = nextCheckedMenuItems.indexOf(menuItem);
        if(index > -1) {
            nextCheckedMenuItems.splice(index, 1);
        } else {
            nextCheckedMenuItems.push(menuItem);
        }

        setCheckedMenuItems(nextCheckedMenuItems);
    }

    function filterHandler(filterItem) {
        let nextCheckedFilterItems = [...checkedFilterItems];
        let index = nextCheckedFilterItems.indexOf(filterItem);
        if(index > -1) {
            nextCheckedFilterItems.splice(index, 1);
        } else {
            nextCheckedFilterItems.push(filterItem);
        }

        setCheckedFilterItems(nextCheckedFilterItems);
    }
    
    function currencyChangeHandler() {
        setSelectedCurrency(selectedCurrency === CURRENCY_TYPES.GEL ? CURRENCY_TYPES.LBP : CURRENCY_TYPES.GEL);
    }

    function searchHandler(text) {
        setSearvhValue(text);
    }

    function rangeChangeHandler(range) {
        setPriceRange(range);
    }

    //Build array of menu items object from response data
    const menuItems = useMemo(() => {
        let res = [];
        let nextCheckedMenuItems = [];
        
        data.menuTags?.forEach(menuTag => {

            if(menuTag.children.length) {
                res.push({
                    id: menuTag.id,
                    label: data.tags[menuTag.id].name,
                    subItems: menuTag.children.map(child => {
                        let item = {
                            id: child,
                            label: data.tags[child].name
                        }
                        nextCheckedMenuItems.push(item);
                        return item;
                    })
                })
            }
        });
        setCheckedMenuItems(nextCheckedMenuItems);
        allMenuItemsRef.current = nextCheckedMenuItems;
        return res;
    }, [data]);

    const filterItems = useMemo(() => {
        let res = [];
        data.filterBarTags?.forEach(filterTag => {
            res.push({
                id: filterTag.id,
                label: data.tags[filterTag.id].name
            })
        });
        return res;
    }, [data])

    //Get filtered market items by specific filters
    const marketItems = useMemo(() => {
        let res = [];
        //Filter by checked sidebar items
        for(let id in data.marketItem) {
            if(checkedMenuItems.find(item => data.marketItem[id].tags.includes(item.id))) {
                let item = {
                    ...data.marketItem[id], 
                    id: id,
                    discount: null,
                    discountedPrice: data.marketItem[id].price
                };

                if(item.discountId) {
                    item.discount = data.discounts[item.discountId];
                    item.discount.formattedDate = buildDateTime(item.discount.end_date);
                    item.discountedPrice = calculateDiscountedPrice(item.price, item.discount.percent);
                }

                res.push(item);
            }
        }

        //Filter by checked top bar filter items
        if(checkedFilterItems.length) {
            res = res.filter(item => {
                for(let filterItem of checkedFilterItems) {
                    return item.tags.includes(filterItem.id);
                }
                return true;
            })
        }

        //Filter by top bar gel or points
        res = res.filter(item => item.currencyId === selectedCurrency);

        //Filter by search phrase
        res = res.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase().trim()));

        //Filter by price range
        res = res.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

        return res;
    }, [data, checkedMenuItems, checkedFilterItems, selectedCurrency, searchValue, priceRange]);

    const currencies = useMemo(() => {
        return data.currencies;
    }, [data])

    useEffect(() => {
        getData()
        .then(res => {
            for(let id in res.marketItem) {
                res.marketItem[id].bgImage = IMAGE_URLS[Math.floor(Math.random() * IMAGE_URLS.length - 1)]
            }
            setData(res);
        });
    }, []);

    useEffect(() => {
        if(selectedCurrency === CURRENCY_TYPES.GEL) {
            setPriceRange([0, 1000])
        } else {
            setPriceRange([0, 100000])
        }
    }, [selectedCurrency])
   
    return (
        <Styled.Wrapper>
            <Sidebar menuItems={menuItems} onCheck={checkHandler} checkedMenuItems={checkedMenuItems}/>
            <Styled.Gamezone>
                <Header 
                    filterItems={filterItems} 
                    onFilterClick={filterHandler} 
                    currencies={currencies} 
                    selectedCurrency={selectedCurrency} 
                    onCurrencyChange={currencyChangeHandler}
                    searchValue={searchValue}
                    onSearch={searchHandler}
                />
                <Styled.Offer>
                    <span>OFFERS</span>
                    <div className="slider">
                        <TooltipSlider
                            tipProps={{
                                visible:true
                            }}
                            range
                            min={0}
                            max={selectedCurrency === CURRENCY_TYPES.GEL ? 1000 : 100000}
                            step={selectedCurrency === CURRENCY_TYPES.GEL ? 2 : 200}
                            defaultValue={[0, 1000]}
                            value={priceRange}
                            allowCross={false}
                            tipFormatter={(value) => `${value}.00`}
                            onChange={rangeChangeHandler}
                        />
                    </div>
                </Styled.Offer>
                <Styled.SlotsContainer>
                    {
                        marketItems.map(item => <Slot key={item.id} item={item}/>)
                    }
                </Styled.SlotsContainer>
            </Styled.Gamezone>
        </Styled.Wrapper>
    );
}

export default App;
