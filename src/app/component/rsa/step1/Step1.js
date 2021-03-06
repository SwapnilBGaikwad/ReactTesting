import React from 'react'

import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import If from '../../common/If';

import {checkValidity, onPChange, onQChange} from './action/RSAStep1Actions';

const Steps1 = ({p, q, isValidNumbers, onPChange, onQChange, handleClick}) => {
    return (<Card>
        <CardHeader title="Step 1" subtitle="Set p and q"/>
        <CardText>
            Choose p and q as prime numbers
            <br/>
            <div>
                <TextField id="p" hintText="p value" type={'number'}
                           onChange={(e) => onPChange(e.target.value)}
                           errorText={p.errorText}/>
            </div>
            <div>
                <TextField id="q" hintText="q value" type={'number'}
                           onChange={(e) => onQChange(e.target.value)}
                           errorText={q.errorText}/>
            </div>
        </CardText>
        <CardActions>
            <FlatButton label="Set p and q" onClick={() => handleClick()}/>
        </CardActions>
        <If when={isValidNumbers}>
            <CardText>N = p * q : {p.value * q.value} </CardText>
            <CardText>Phi(N) = (p - 1) * (q - 1) : {(p.value - 1) * (q.value - 1)} </CardText>
        </If>
    </Card>);
};

const mapStateToProps = (state) => {
    return {
        p: state.rsa.step1.p,
        q: state.rsa.step1.q,
        isValidNumbers: state.rsa.step1.isValidNumbers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPChange: onPChange(dispatch),
        onQChange: onQChange(dispatch),
        handleClick: checkValidity(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps1);