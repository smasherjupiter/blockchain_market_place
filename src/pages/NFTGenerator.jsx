import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {pricingcards} from '../assets/fake-data/data-nft';
import PricingCard from '../components/layouts/nftgen/PricingCard';
import TypeCard from '../components/layouts/nftgen/TypeCard';


function NFTGeneratorMain(){

  const pcarddata = pricingcards;

  return(<>
      <div className='detail-page pad-t-24'>
          <div className="themesflat-container">
              <section className="tf-section">
                <div className="row mt-21">
                  <div className="col-md-12 voomio-title">
                      <div className="">
                          <h2 className="tf-title">NFT Generator</h2>
                          <div className="heading-line"></div>
                      </div>
                  </div>
                </div>
                <div className="row mt-21">
                  <div className="row mt-3">
                    <h4 className="spec-color-1">Pricing</h4>
                    <p className="mt-3 mb-5">Select a subscription for the PFP & Collection Generator.</p>
                  </div>
                  <div className="row mb-3">
                    {pcarddata.map((item, index)=>(
                      <div key={index} className="col-sm-1 col-md-4">
                        <PricingCard data={item} />
                      </div>
                    ))}
                  </div>
                  <div className="row my-3">
                  <div className="col-sm-12 col-md-3">
                    <Button className="voomio-btn" sx={{width:'90%'}} variant="contained" size="large">Selected</Button>
                  </div>
                  <div className="col-sm12 col-md-6">
                  <div className="flex">
                    <Typography variant="h4" sx={{mb:1}}>
                     Basic
                    </Typography>
                    <Typography className="spec-color-1" variant="h5" sx={{mb:1, ml:2, fontWeight:'600'}}>
                     Free
                    </Typography>
                  </div>
                  <Typography variant="h5" sx={{mb:1}}>
                   Only single NFTs can be generated with Basic plan.
                  </Typography>
                  </div>
                  </div>
                  <div className="row mt-5">
                    <h4 className="spec-color-1">NFT Type</h4>
                    <p className="mt-3 mb-5">Select a subscription for the PFP & Collection Generator.</p>
                  </div>
                  <div className="row">
                    <div className="col-sm-1 col-md-5">
                      <TypeCard
                        type="1"
                        title="Create a Single NFT"
                        desc="This will generate a tokenset based on the preview you have seen in the gallery. What you???ve seen is what you get. Voomio adds randomization to the token number."
                      />
                    </div>
                    <div className="col-sm-1 col-md-5">
                      <TypeCard
                        type="2"
                        title="Create an NFT Set"
                        desc="This will create a set based on your rules and rarity settings, but isn???t what you saw in the gallery. This will guarantee higher randomization and less bias."
                      />
                    </div>
                  </div>
                </div>
              </section>
          </div>
      </div>
    </>)
}

export default NFTGeneratorMain;
