const mockHero = {
    name: 'Name',
    thumbnail: {
        path: '',
        extension: '',
    },
    description: '',
    urls: [
        {
            type: '',
            url: ''
        }
    ],
};

const mockListHeroes = [
    {
        name: 'Name',
        thumbnail: {
            path: '',
            extension: '',
        },
        description: '',
        comics: {
            available: 0,
        },
        events: {
            available: 0,
        },
        series: {
            available: 0,            
        },
        stories: {
            available: 0,            
        },
        urls: [
            {
                type: '',
                url: ''
            }
        ],
    }
]

const mockImage = 'http://www.ricoh-imaging.co.jp/english/products/q-s1/ex/img/bod_mainImg_01.jpg';

const mockTitle = 'Test Title';

const mockOnClick = () => null;

export { mockHero, mockImage, mockTitle, mockListHeroes, mockOnClick};