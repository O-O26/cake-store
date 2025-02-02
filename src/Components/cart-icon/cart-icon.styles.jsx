import styled from "styled-components"
import ShoppingSvg from "../../assets/shopping-bag.svg"

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 40px;
    height: 40px;
`

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const ItemCount = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 12px;
`
// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
    
//     .shopping-icon {
//         width: 40px;
//         height: 40px;
//     }
//     .item-count {
//         position: absolute;
//         font-size: 12px;
//         font-weight: bold;
//         bottom: 12px;
//     }
// }