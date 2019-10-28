function importAll(r) {
    const images = [];
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../images', false, /\d.(png|jpe?g)$/));

var dataArr = [
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        shortDescription: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
        colors: ["red", "blue", "orange"],
        price: 24,
        trends: ["birthday", "decoration", "love"],
        url: images['2.jpg']
    },
    {
        id: "3",
        title: "Lorem ipsum dolor sit amet.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        shortDescription: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
        colors: ["red", "blue", "orange"],
        price: 11,
        trends: ["birthday", "decoration", "love"],
        url: images['3.jpg']
    },
    {
        id: "5",
        title: "Lorem ipsum dolor sit amet.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        shortDescription: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
        colors: ["red", "blue", "orange"],
        price: 13,
        trends: ["birthday", "decoration", "love"],
        url: images['5.jpg']
    },
];

export default dataArr;