import { CURRENCY_TYPES } from '../../constants';
import * as Styled from './styles';

function Slot({item}) {
    return (
        <Styled.SlotFrame>
            <Styled.Offer bgImage={item.bgImage}>
                <div className='overlay'>
                    <Styled.Top>
                        <div className='prize'>{item.prizeAmount} {item.prizeType}</div>
                        <div className='description'>
                            <p>{item.name}</p>
                            <span>{item.name}</span>
                        </div>
                        {
                            item.discount && 
                            <div className='discount'>
                                <div>{item.discount.formattedDate}</div>
                                <div>{- item.discount.percent}%</div>
                            </div>
                        }
                    </Styled.Top>
                    <Styled.Bottom>
                        <p className='name'>{item.name}</p>
                        <p className='price'>{item.discountedPrice} {item.currencyId === CURRENCY_TYPES.GEL ? 'GEL' : 'POINTS'}<span> {item.discount && item.price + ' GEL'} </span></p>
                        <div className='buttons'>
                            <button className='buy'>BUY</button>
                            <button className='for-friend'>FOR FRIEND</button>
                        </div>
                    </Styled.Bottom>

                </div>
            </Styled.Offer>
        </Styled.SlotFrame>
    )
}

export default Slot;