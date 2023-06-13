import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as productService from '../../services/creditcard';

const Form = () => {
    const navigate = useNavigate();
    const [creditCard, setCreditCard] = useState({creditCard: ''});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreditCard({
            ...creditCard,
            [ e.target.name ]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const res = await productService.validate(creditCard.creditCard);
            toast.success(res.data.message);
            navigate('/');
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <div className="row justify-content-center">
                <div className="card col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">Insert your creditcard number</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="creditCard"
                                    placeholder="0000 0000 0000 0000"
                                    autoFocus
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Validate
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    )
};

export default Form;
