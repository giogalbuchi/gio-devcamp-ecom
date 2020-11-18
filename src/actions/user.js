import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A004847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 9.50,
                orderNumber: 'B004847413',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kristine Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 10.30,
                orderNumber: 'A204847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Vanesa Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 4.40,
                orderNumber: 'A005447493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Zac Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 29.10,
                orderNumber: 'A004847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 16.40,
                orderNumber: 'C004847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Lebron Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A004847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Nick Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 18.50,
                orderNumber: 'A004847493',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Joe Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}