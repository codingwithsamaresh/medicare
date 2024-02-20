 import { useEffect, useState } from "react"
 import './Profile.css'
 import {AiOutlineDelete} from 'react-icons/ai'
 import {BASE_URL, token} from './../../config.js'
 import {toast} from 'react-toastify'

const Profile = ({doctorData}) => {

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        password: "",
        phone:"",
        bio:"",
        gender:"",
        specialization:"",
        ticketPrice:0,
        qualifications:[{startingDate:'',endingDate:'',degree:'',university:''}],
        experiences:[{startingDate:'',endingDate:'',position:'',hospital:''}],
        timeSlots:[{startingTime:'',endingTime:'',day:''}],
        about:'',
    });
    useEffect(()=>{
        setFormData({
            name: doctorData?.name,
            email:doctorData?.email,
            phone:doctorData?.phone,
            bio:doctorData?.bio,
            gender:doctorData?.gender,
            specialization:doctorData?.specialization,
            ticketPrice:doctorData?.ticketPrice,
            qualifications:doctorData?.qualifications,
            experiences:doctorData?.experiences,
            timeSlots:doctorData?.timeSlots,
            about:doctorData?.about,
        });
    },[doctorData]);

    const handleInputChange = e=>{

        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const updateProfileHandler = async e =>{
        e.preventDefault();
        try{
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if(!res.ok){
                throw Error(result.message); 
            }
            toast.success(result.message);
        }catch(err){
            toast.error(err.message);
        };
    };

    //reusable function for deleting items
    const deleteItem = (key,index) =>{
        setFormData(prevFormData =>({
            ...prevFormData,
            [key]:prevFormData[key].filter((_,i)=> i !== index),
        }));
    };

    //reusable input change function
    const handleReusableInputChangeFunc = (key,index,event)=>{
        const {name,value} = event.target;

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]];
            updateItems[index][name] = value;
            return {
                ...prevFormData,[key]:updateItems
            };
        })
    }

    //reusable function for adding items
    const addItem= (key,item) =>{
        setFormData(prevFormData =>({...prevFormData, [key]:[...prevFormData[key], item]}))
    }
    const addQualification = e=>{
        e.preventDefault();
        addItem("qualifications",{
            startingDate:'',endingDate:'',degree:'',university:''
        });
    };
    const handleQualificationChange = (event,index)=>{
        handleReusableInputChangeFunc('qualifications',index,event);
    };
    const deleteQualification = (e,index)=>{
        e.preventDefault();
        deleteItem("qualifications",index);
    };
    const addExperience = e=>{
        e.preventDefault();
        addItem("experiences",{
            startingDate:'',endingDate:'',position:'',hospital:''
        });
    };
    const handleExperienceChange = (event,index)=>{
        handleReusableInputChangeFunc('experiences',index,event);
    };
    const deleteExperience = (e,index)=>{
        e.preventDefault();
        deleteItem("experiences",index);
    };
    const addTimeSlot = e=>{
        e.preventDefault();
        addItem("timeSlots",{
            startingTime:'',endingTime:'',day:''
        });
    };
    const handleTimeSlotChange = (event,index)=>{
        handleReusableInputChangeFunc('timeSlots',index,event);
    };
    const deleteTimeSlot = (e,index)=>{
        e.preventDefault();
        deleteItem("timeSlots",index);
    };

  return (
    <div className="p">
        <h2>Profile Information</h2>
        <form>
            <div className="f">
                <p>Name*</p>
                <input className="i" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" />
            </div>
            <div className="f">
                <p>Email*</p>
                <input className="i" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" readOnly aria-readonly disabled="true" />
            </div>
            <div className="f">
                <p>Phone*</p>
                <input className="i" type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" />
            </div>
            <div className="f">
                <p>Bio*</p>
                <input className="i" type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio" maxLength={100} />
            </div>
            <div>
                <div className="l">
                    <div>
                        <p>Gender*</p>
                        <select name="gender" value={formData.gender} onChange={handleInputChange} >
                            <option value="">select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <p>Specialization*</p>
                        <select name="specialization" value={formData.specialization} onChange={handleInputChange} >
                            <option value="">select</option>
                            <option value="surgeon">Surgeon</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="dermatologist">Dermatologist</option>
                        </select>
                    </div>
                    <div>
                        <p>Ticket Price*</p>
                        <input type="number" placeholder="100" name="ticketPrice" value={formData.ticketPrice} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="q">
                <p>Qualifications*</p>
                {formData.qualifications?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="u">
                                <div>
                                    <p>Starting Date</p>
                                    <input onChange={e=> handleQualificationChange(e,index)} type="date" name="startingDate" value={item.startingDate}  />
                                </div>
                                <div>
                                    <p>Ending Date</p>
                                    <input onChange={e=> handleQualificationChange(e,index)} type="date" name="endingDate" value={item.endingDate}  />
                                </div>
                                <div>
                                    <p>Degree*</p>
                                    <input onChange={e=> handleQualificationChange(e,index)} type="text" name="degree" value={item.degree}  />
                                </div>
                                <div>
                                    <p>University*</p>
                                    <input onChange={e=> handleQualificationChange(e,index)} type="text" name="university" value={item.university}  />
                                </div>
                            </div>
                            <button onClick={e=> deleteQualification(e,index)} className="a"><AiOutlineDelete /></button>
                        </div>
                    </div>
                ))}
                <button onClick={addQualification} className="b">Add Qualifications</button>
            </div>
            <div className="q">
                <p>Experiences*</p>
                {formData.experiences?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="u">
                                <div>
                                    <p>Starting Date*</p>
                                    <input onChange={e=> handleExperienceChange(e,index)} type="date" name="startingDate" value={item.startingDate}  />
                                </div>
                                <div>
                                    <p>Ending Date*</p>
                                    <input onChange={e=> handleExperienceChange(e,index)} type="date" name="endingDate" value={item.endingDate}  />
                                </div>
                                <div>
                                    <p>Position*</p>
                                    <input onChange={e=> handleExperienceChange(e,index)} type="text" name="position" value={item.position}  />
                                </div>
                                <div>
                                    <p>Hospital*</p>
                                    <input onChange={e=> handleExperienceChange(e,index)} type="text" name="hospital" value={item.hospital}  />
                                </div>
                            </div>
                            <button onClick={e=> deleteExperience(e,index)} className="a"><AiOutlineDelete /></button>
                        </div>
                    </div>
                ))}
                <button onClick={addExperience} className="b">Add Experiences</button>
            </div>
            <div className="q">
                <p>Time Slots*</p>
                {formData.timeSlots?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="i">
                                <div>
                                    <p>Day*</p>
                                    <select onChange={e=> handleTimeSlotChange(e,index)} name="day" value={item.day}>
                                        <option value="">Select</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Starting Time*</p>
                                    <input onChange={e=> handleTimeSlotChange(e,index)} type="time" name="startingTime" value={item.startingTime}  />
                                </div>
                                <div>
                                    <p>Ending Time*</p>
                                    <input onChange={e=> handleTimeSlotChange(e,index)} type="time" name="endingTime" value={item.endingTime}  />
                                </div>
                            </div>
                            <button onClick={e=> deleteTimeSlot(e,index)} className="a"><AiOutlineDelete /></button>
                        </div>
                    </div>
                ))}
                <button onClick={addTimeSlot} className="b">Add Time Slots</button>
            </div>
            <div className="q">
                <p>About*</p>
                <textarea name="about" rows={5} value={formData.about} placeholder="write about you" onChange={handleInputChange}></textarea>
            </div>
            <div>
                <button type="submit" onClick={updateProfileHandler} className="s">Update Profile</button>
            </div>
        </form>
    </div>
  )
}

export default Profile