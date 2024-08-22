const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        { label: "Action figures", checked: false },
        { label: "Building and Construction Toys", checked: false },
        { label: "sports toys", checked: false },
        { label: "Electronic toys", checked: false },
        { label: "Educational toys", checked: false }
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { label: "Lego", checked: false },
        { label: "Mattel", checked: false },
        { label: "Hasbro", checked: false },
        { label: "MGA Entertainment", checked: false },
        { label: "Spin Master", checked: false },
      ],
    },
    {
      id: "rating",
      name: "Rating",
      options: [
        // { label: "4 Stars & Up", checked: false },
        // { label: "3 Stars & Up", checked: false },
        // { label: "2 Stars & Up", checked: false },
        // { label: "1 Star & Up", checked: false },

        { label: 2, checked: false },
        { label: 3, checked: false },
        { label: 4, checked: false },
        { label: 5, checked: false },
        { label: 1, checked: false },
      ],
    },
    {
      id: "price",
      name: "Price Range",
      options: [
        { label: "$500 - $1000", checked: false },
        { label: "$1000 - $2000", checked: false },
        { label: "$2000 - $3000", checked: false },
        { label: "$3000 - $5000", checked: false },
      ],
    },
  ];


  export default filters