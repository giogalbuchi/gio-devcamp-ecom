import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormInput, FormButton, GrayButton } from '../formFields';

class AccountInformationForm extends Component {

    constructor() {
        super()

        this.state = {
            showPassword: false
        }
    }

    render() {
        const { className, handleSubmit } =this.props;
    
        return(
            <form onSubmit ={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__name' type ='name' title='Name' placeholder='Name' name='name' component={FormInput}/>
                <Field className='account-information-form__email' type ='email' title='Email' placeholder='Email' name='email' component={FormInput}/>

                <Field className='account-information-form__street-address' type ='address' title='Street Address' placeholder='Street Address' name='address' component={FormInput}/>
                <Field className='account-information-form__city' type ='city' title='City' placeholder='City' name='city' component={FormInput}/>

                <Field className='account-information-form__state' type ='state' title='State' placeholder='State' name='state' component={FormInput}/>
                <Field className='account-information-form__zipcode' type ='zipcode' title='Zipcode' placeholder='Zipcode' name='zipcode' component={FormInput}/>
 
                {/* <Field className='account-information-form__password' type ='password' title='Password' placeholder='Password' name='password' component={FormInput}/> */}
                {
                    this.state.showPassword ?
                    [
                    <Field key={0} className='account-information-form__current' type ='password' title='Current Password' placeholder='Current Password' name='currrent' component={FormInput}/>,
                    <Field key={1} className='account-information-form__new' type ='password' title='New Password' placeholder='New Password' name='new' component={FormInput}/>,
                    <Field key={2} className='account-information-form__confirm' type ='password' title='Confirm Password' placeholder='Confirm Password' name='confirm' component={FormInput}/>,
                    <div key={3} className='account-information-form__line'></div>,
                    <Field key={4} className='account-information-form__update-information' onClick={() => this.setState({ showPassword: false })} type ='submit' title='Update Information' name='update-information' component={FormButton}/>,
                    <Field key={5} className='account-information-form__cancel' onClick={() => this.setState({ showPassword: false })} type ='button' title='Cancel' name='cancel' short={true} component={FormButton}/>,
                    ]
                    :
                    <Field className='account-information-form__change-password' onClick={() => this.setState({ showPassword: true })} type ='button' labelTitle='Password'title='Change Password' name='change-password' component={GrayButton}/>
                }
                 
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;