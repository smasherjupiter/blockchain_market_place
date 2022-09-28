import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


const data = [
  {
    keyname:"Fur",
    filters:[
      {
        id:1,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:2,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:3,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:4,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:5,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
  {
    keyname:"Eyes",
    filters:[
      {
        id:6,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:7,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:8,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:9,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:10,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
  {
    keyname:"Earring",
    filters:[
      {
        id:11,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:12,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:13,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:14,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:15,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
  {
    keyname:"Clothers",
    filters:[
      {
        id:16,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:17,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:18,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:19,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:20,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
  {
    keyname:"Background",
    filters:[
      {
        id:21,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:22,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:23,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:24,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:25,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
  {
    keyname:"Moods",
    filters:[
      {
        id:26,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:27,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:28,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:29,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
      {
        id:30,
        name: "M1 dark br..",
        value:  "1981(10.20%)"
      },
    ]
  },
]

export const SearchCard = (props) => {

    const name = props.name
    const data = props.filters;

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];

     if (currentIndex === -1) {
       newChecked.push(value);
     } else {
       newChecked.splice(currentIndex, 1);
     }

     setChecked(newChecked);
    };

  return(
    <div className="swiper-container alpha-card show-shadow carousel4 button-arow-style">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                  <Card sx={{ minWidth: 275 }}>
                     <CardContent>
                       <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                      {data.map((item) => {
                        const labelId = `checkbox-list-label-${item.id}`;

                        return (
                            <ListItem
                              key={item.id}
                              disablePadding
                            >
                              <ListItemButton className="searchcard-checkbox" role={undefined} onClick={handleToggle(item.id)} dense>
                                <ListItemIcon className="searchcard-checkicon">
                                  <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${item.name +"("+ item.value + ")"}`} />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                        </List>
                     </CardContent>
                 </Card>
              </div>
          </div>
        </div>
      </div>
  )
}
function MoreOption(){
  return(
    <>
    <div className="row">
      <div className="col-md-12 flex more-option">
          <div className="seclect-box voomio-pl-1 voomio-mta">
              <div id="artworks" className="dropdown">
                  <Link to="#" className="btn-selector nolink voomio-select">Marketplace</Link>
                  <ul className='voomio-zindex'>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                  </ul>
              </div>
          </div>
          <div className="flex mg-l-8 mg-r-8">
            <h5 className="voomio-mta spec-color-1">Price</h5>
            <div class="input-group min-max-btn mg-l-8 mg-r-8">
              <input type="number" class="form-control" placeholder="Min" aria-label="min" aria-describedby="basic-addon1"/>
            </div>
            <h5 className="voomio-mta spec-color-1">to</h5>
            <div class="input-group min-max-btn mg-l-8 mg-r-8">
              <input type="number" class="form-control" placeholder="Max" aria-label="max" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="seclect-box voomio-pl-1 voomio-mta">
              <div id="artworks" className="dropdown">
                  <Link to="#" className="btn-selector nolink voomio-select">Rarity</Link>
                  <ul className='voomio-zindex'>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                      <li><span>Past 24 hours</span></li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="flex">
          <h5 className="spec-color-1 mg-l-8" > Filters : </h5>
          <div className='filter-tag voomio-mta'><span>Sales</span></div>
          <div className='filter-tag voomio-mta'><span>Listings</span></div>
          <div className='filter-tag voomio-mta'><span>Offers</span></div>
          <div className='filter-tag voomio-mta'><span>Transfers</span></div>
        </div>
      </div>
      <div className="col-md-12 mt-5 mb-5">
      <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
              0: {
                  slidesPerView: 1,
                },
              500:{
                  slidesPerView: 2,
              },
              771:{
                  slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 5,
              },
            }}
          navigation
          scrollbar={{ draggable: true }}
      >
          {
              data.map((item,index) => (
                  <SwiperSlide key={index}>
                      <SearchCard name={item.keyname} filters={item.filters}/>
                  </SwiperSlide>
              ))
          }
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default MoreOption;
