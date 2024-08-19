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
        { label: "Brand A", checked: false },
        { label: "Brand B", checked: false },
        { label: "Brand C", checked: false },
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
      ],
    },
    {
      id: "price",
      name: "Price Range",
      options: [
        { label: "$0 - $50", checked: false },
        { label: "$50 - $100", checked: false },
        { label: "$100 - $500", checked: false },
        { label: "$500 - $1000", checked: false },
      ],
    },
  ];


  export default filters