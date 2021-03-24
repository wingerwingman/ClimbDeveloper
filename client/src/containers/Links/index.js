import React                  from 'react';
import { connect }            from 'react-redux';
import Link                   from '../../components/Link';
import '../../App.css';
class Links extends React.Component {
  render () {
    // eslint-disable-next-line
    let { links, state } = this.props;

    return (
      <div className="content">
        <h2>{'Useful links and references:'}</h2>
        <ul>
          {links.map((link, key) => {
            return (<Link key={key} {...link} />);
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    links: state.links
  };
}

// eslint-disable-next-line
function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
