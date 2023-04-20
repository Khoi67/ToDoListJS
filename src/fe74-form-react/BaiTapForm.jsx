import React, { Component } from 'react';
import FormSinhVien from './FormSinhVien';
import Search from './Search';
import TableSinhVien from './TableSinhVien';

class BaiTapForm extends Component {
    render() {
        return (
            <div className="container">
                <FormSinhVien />
                <div className='mt-5 ml-3 w-50'>
                <Search />
                </div>
                <TableSinhVien />
            </div>
        );
    }
}

export default BaiTapForm;