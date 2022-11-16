import React from 'react';
import { useState } from 'react';


const Index = () => {
    const state = {
        rows:[{}]
    };
    handleChange = idx => e =>{
        const { name, value } = e.target;

        console.log( name, value );

        const rows = [...this.state.rows];
        rows[idx] = {
            ...rows[idx],
            [name] : value
        };
        this.setState({
            rows
        });
    };

    handleChangeEmail = idx => e =>{
        const { name, value } = e.target;

        console.log( name, value );

        const rows = [...this.state.rows];
        rows[idx] = {
            ...rows[idx],
            email: value
        };
        this.setState({

        });
    };

    handleAddRow = () => {
        const item = {
            email: "",
            mobile:""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };

    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = idx => () =>{
        const rows = [...this.state.rows];
        rows.splice(idx, 1);
        this.setState({rows});
    };

    return(
        <>
            <div>
                <div className='container'>
                    <div className='row clearfix'>
                        <div className='col-md-12 column'>
                            <table className='table table-bordered table-hover' id='tab_logic'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>ID</th>
                                        <th className='text-center'>Name</th>
                                        <th className='text-center'>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((item,idx) =>(
                                        <tr className='addr0' key={idx}>
                                            <td>{idx}</td>
                                            <td>
                                                <input 
                                                    type='text'
                                                    name='email'
                                                    value={this.state.row[idx].email}
                                                    onChange={this.handleChangeEmail(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                        type='text'
                                                        name='mobile'
                                                        value={this.state.row[idx].email}
                                                        onChange={this.handleChange(idx)}
                                                        className="form-control"
                                                    />
                                            </td>
                                            <td>
                                                <button
                                                    className='btn btn-outline-danger btn-sm'
                                                    onClick={this.handleRemoveSpecificRow(idx)}
                                                >
                                                   Remove         
                                                </button>
                                            </td>
                                        </tr>
                                    ))};
                                </tbody>
                            </table>
                            <button
                                className='btn btn-primary'
                                onClick={this.handleAddRow}
                            >
                                Add Rw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}
export default Index;