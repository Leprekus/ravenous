import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        const businessArray = this.props.businessArray
        const business = businessArray.map((data,index) => {
            return <Business key={data.name + index} business={data}/>
        })
        return (
            <div className='BusinessList'>
               {business} 

            </div>
        )
    }
};

export default BusinessList;