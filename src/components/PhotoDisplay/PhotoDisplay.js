import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Skeleton, Switch, Card, Icon, Avatar, DatePicker } from 'antd';

import './PhotoDisplay.scss'



const PhotoDisplay = () => {
    const [photo, setPhoto] = useState([]);
    const [loading, setLoading] = useState(false)
    const { MonthPicker, RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const { Meta } = Card;

    // const fetchPhoto = () => {
    //     axios
    //     .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    //     .then(response => {
    //       setPhoto(response.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    //   };
  
    // useEffect(() => {
    //   fetchPhoto();
    // }, []);

    const onChange = checked => {
      setLoading(true);
    };

    return (
        <div className="photo-display">
            <h2>Pick a Date</h2>
            <DatePicker 
              defaultValue={moment('2012/03/14', dateFormat)} 
              format={dateFormat}
              size={'large'} />
              {/* replace h2 with {photo.title} */}
            <h2>SUN SPOT</h2>
            {/* replace src with {photo.url} */}
            <img src='https://timedotcom.files.wordpress.com/2014/10/1966875_733873019993257_6346729834986608387_n.jpg' alt="nasa pic" />

            <Card style={{ width: 900, marginTop: 16 }} loading={loading}>
              <Meta
                title="Description"
                description='REPLACE THIS WITH {photo.explanation} But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
              />
            </Card>
        </div>
    )
}

export default PhotoDisplay