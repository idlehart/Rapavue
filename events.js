var eventGallery = new Vue({ 
    el: '#eventGallery',
    data: {
        message: '',
        events: [
            {
                id: '1',
                place: 'Stockholm',
                date: 'May 2020',
                picture: 'images/gallery/thumbs/01.jpg',
                fulls: 'images/gallery/fulls/01.jpg',
                info: "Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices."
            },
            {
                id: '2',
                place: 'Stockholm',
                date: 'May 2020',
                picture: 'images/gallery/thumbs/01.jpg',
                fulls: 'images/gallery/fulls/01.jpg',
                info: "Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices."
            },
            {
                id: '3',
                place: 'Stockholm',
                date: 'May 2020',
                picture: 'images/gallery/thumbs/01.jpg',
                fulls: 'images/gallery/fulls/01.jpg',
                info: "Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices."
            },
        ]
    },
});
