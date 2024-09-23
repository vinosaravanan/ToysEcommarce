import deadpool1 from '../assets/img/bestSellerImg/deadpoolnew.jpg';
import barbie from '../assets/img/bestSellerImg/barbie.webp'
import naruto from '../assets/img/bestSellerImg/naruto.jpg'
import onepice from '../assets/img/bestSellerImg/onepiece2.avif'


const products = [
    {
      id: 1,
      name: "Deadpool",
      description: "We all know Wade Wilson is one of the top mercenary/assassins in ",
      price: 1.099,
      discount:19,
      image:deadpool1
    },

    {
      id: 2,
      name: "Barbie",
      description: " Roll out the pink carpet! Create your own Barbie world with dollss",
      price: 899,
      discount:14,
      image: barbie
    },
    
    {
      id: 3,
      name: "Naruto",
      description: " Some say that the world of Naruto can teach businesses lessons about",
      price: 749,
      discount:12,
      image: naruto
    },
    {
      id: 4,
      name: "One Piece",
      description: "A Personalised Luffy from One Piece Night Light is a perfect gift",
      price: 949,
      discount:15,
      image: onepice
    },
   
  ];

export default products;


