import { Item } from './Item';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openEditBox } from '../../store/ducks/pokemon';

function mapStateToProps(state) {
    return {
    }
}


export default withRouter(connect(mapStateToProps, { openEditBox })(Item));