import PropTypes from 'prop-types'

function Item ({ img, titre, description }) {
    return (
      <div className='featureItem'>
        <img src={img} alt='item' className="featureIcon" width={100} height={100} key={img}/>
        <h3> {titre} </h3>
        <p> {description} </p>
      </div>
    )
  }
  
  Item.propTypes = {
    image: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
  export default Item