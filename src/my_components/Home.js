import FormCustomerDetails from "./FormCustomerDetails";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
    //FormCourtesyPhone & Child 2: Form Cost
    const updateSharedState = (value) => setSharedBond(value);
    const [sharedBond, setSharedBond] = useState(0);


    //Child 1: FormRepairDetail & Child2: FormCost 
    const updateWarranty = (value) => {setSharedWarranty(value);};
    const[sharedWarranty, setSharedWarranty] = useState(false)

    //Pass customerDetails from "FormCustomerDetail" component to "Home"

    const [customerDetails, setCustomerDetails] = useState({title: 'Mr', firstname: "", lastname: "", });
    /*Invoice code*/
    const navigate = useNavigate();
    const onSubmit = async(event) => {
        event.preventDefault();

        try {
            const attachedData = {sharedBond, customerDetails};

            navigate('/invoice', {state: {attachedData}});
        }

        catch(e) {
            alert('Error');
        }
    }
    return(
        <>
            <div className="container-fluid">
                <form className='row' style={{minHeight: '60vh'}} onSubmit={onSubmit}>
                    <div className='col-12 col-lg-4 p-4 m-0' style={{minHeight: '30vh', backgroundColor: '#FCF3CF'}}> <FormCustomerDetails sendCustomerDetails={(value) => setCustomerDetails(value)}/>
                        Customer Details
                    </div>

                    <div className='col-12 col-lg-4 p-4 m-0' style={{minHeight: '30vh', backgroundColor: '#D5F5E3'}}> <FormRepairDetail passDataToParent={updateWarranty}/>
                        Repair Details 
                    </div>

                    <div className='col-12 col-lg-4 p-4 m-0'>
                        <div className='p4' style={{minHeight: '30vh', backgroundColor:'#2874A6'}}> <FormCourtesyPhone passDataToParent={updateSharedState} />
                            Courtesy Phone
                        </div>

                        <div className='p4' style={{minHeight: '20vh', backgroundColor:'#EDBB99'}}> <FormCost sharedPropBond={sharedBond} sharedPropWarranty={sharedWarranty}/>
                            Cost

                        </div>

                        <div className='p-4 text-center' style={{minHeight: '10vh', backgroundColor:'#EDBB99'}}> <FormButtons />
                             
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;