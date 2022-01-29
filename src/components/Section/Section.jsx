import PropTypes from 'prop-types';

function Section({title, children}) {

    return(
      <div>
          {title && <h2>{title}</h2>}
          {children}
          
      </div>
  )
}
Section.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default Section;