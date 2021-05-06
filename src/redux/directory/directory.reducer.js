const INITIAL_STATE = {
    sections: [{
        title: ' hats ',
        imageUrl: 'https://thumbs.dreamstime.com/b/portrait-man-navy-blue-suit-white-shirt-hat-touch-glasses-fashion-side-view-brown-straw-black-eyewear-grey-154316053.jpg',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://assets.ajio.com/medias/sys_master/root/hc9/h4d/14170485817374/-473Wx593H-460475285-green-MODEL.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.pinimg.com/originals/9c/8b/65/9c8b65f851b7bcf7f83f224d622c7cd1.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20210105/QozI/5ff48d5daeb2694fd30a399e/rio_pink_printed_shift_dress_with_puff_sleeves.jpg',
        size:'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://i.pinimg.com/474x/0a/5e/39/0a5e391767210bffa954be79a2a17dd5.jpg',
        size:'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer