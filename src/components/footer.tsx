import React from 'react'

const Footer = () => {
  return (
    <div className='border-2 border-Default'>
        <div className='text-center'>
            <h3 className='text-white text-5xl font-semibold'>Katana Inu is a <span className='text-Default'>MMO NFT PC Game</span></h3>
            <p className='text-CustomLight mt-4 text-xl'>With focus on free2play and play2earn to attract web2 gamers.</p>
            <p className='text-CustomLight mt-4 text-xl'>Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace or for purchasing our $Kata Token:</p>
            <div className='flex justify-center flex-wrap mt-4'>
                <button className="bg-Default mx-1 py-2 px-4">PLAY KATANAINU</button>
                <button className='border border-Default mx-1 py-2 px-4'>BUY $KATA TOKEN</button>
                <button className='border border-Default mx-1 py-2 px-4'>GO TO KAINU.IO MARKETPLACE</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
