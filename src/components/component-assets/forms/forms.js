import React from 'react';
import DropDown from 'react-dropdown';
import './forms.scss';

export class TextField extends React.Component {

    render() {
        const p = this.props;
        return (
            <div className='input-field'>
        {p.labelText && <label 
            htmlFor='text-field' 
            className={`label ${p.onColor ? 'on-color-label' : 'on-grayscale-label'} ${p.addLabelClass ? p.addLabelClass : ''}`}
         >{p.labelText ? p.labelText : ''}</label>}
        <input
             type='text' 
             id='text-field'
             className={`input ${p.onColor ? 'on-color-input' : 'on-grayscale-input'} ${p.addLabelClass ? p.addLabelClass : ''}`}
             placeholder={`${p.placeholderText ? p.placeholderText : ''}`}
             disabled={p.disabled}
        />
    </div>
        );
    }
}

export class Select extends React.Component {

    render() {
        const p = this.props;

        return (
            <div className='input-field'>
                {p.labelText && <label  
                    className={`label ${p.onColor ? 'on-color-label' : 'on-grayscale-label'} ${p.addLabelClass ? p.addLabelClass : ''}`}
                >{p.labelText ? p.labelText : ''}</label>}
                <DropDown options={p.options} onChange={this._onSelect} placeholder={p.placeholderText} />
            </div>
        );
    }
}