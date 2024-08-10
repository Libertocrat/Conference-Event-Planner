// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      //img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      img: "https://pixabay.com/get/g83626b73659f213321389c0471c666fb45924dfcaedc14b9765a58f4ef8eabf7991826e480153fd32739e9785e59c51ea95216508be9b564035af232c6fe4f77dc43980946eb7dd2675231386fdaeb6d_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      //img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      img: "https://pixabay.com/get/g9ca145e8301cf6cd8cd0d82b8398c6e128f7b7cd6f2d34760540ced269a483db124f1027e8eae442bac6d40ac72ebf5df572ae57b6e8972713893bb5a4b1b9d9f3f5df34dc626b26aaa30362416a131f_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      //img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      img: "https://pixabay.com/get/g5e332cb721841aa5929a94ca446dac459c0efcf4a33992b5c80eb09fccafe9b80e9961c82c3dcaba5a75124d700b8f8781aea24c290c59424e388cf3adf9605edcb12d92a40f8977b3f130bc6eb65f5b_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      //img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      img: "https://pixabay.com/get/g0052130ebbdad0962f889edf05c9d2a6938d360ff5522041afec50135997eba8101f5e1e88a0ff3feaf68d4388022ab9d9fe229c1635163e126aed4f20dc34420e408b2661b4f26ff63c3920ffcff702_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      //img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      img: "https://pixabay.com/get/g71adf833e677e839d0544c788cb91a1c9e415aec0c24e36570f69cca1d2a8dc7e0290f5b8c30937f68187464537034823c7a74cb623b511e54eb3dab2ca99ef6bcdbdb8fc637a398b170ad556ad3c036_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
