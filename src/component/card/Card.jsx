import React from 'react';
import '../card/Card.css';
import CardItem from "../cardItem/CardItem";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/react-simple-site%2Fimg-9.jpg?alt=media&token=04cd8fe5-bf12-449a-95ab-036b7c17625e'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/react-simple-site%2Fimg-2.jpg?alt=media&token=4ce8bda3-bb1e-4fa1-85c2-4d0b27529968'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/react-simple-site%2Fimg-3.jpg?alt=media&token=f1d34ba3-f98b-459d-a663-39a9e3acb94a'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/react-simple-site%2Fimg-4.jpg?alt=media&token=a108b228-39cd-476b-a70c-fb94aeff7626'
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/react-simple-site%2Fimg-8.jpg?alt=media&token=df6d4a65-7243-4128-906c-dc00cf76429f'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
