import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { batchDetails } from '../constants'
import CardComponent from './Card'

class Referrals extends React.Component {

    render() {
        const { imageUrl} = this.props
        return (
            <div style={{'backgroundColor':"ivory"}}>
            <CardComponent batchDetails = {batchDetails}/>
            <div className={'invite'}>
                {'Get upto 25% discount for inviting a friend!'}
            </div>
            </div>
        )
    }
}

export default Referrals
