import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedText from "./AnimatedText";



export default function Contact() {
  const [state, handleSubmit] = useForm("xwpkvjkd");

  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
  };

  useEffect(() =>{
    if(state.succeeded){
      setShowIcon(true);
      setformData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
      });
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.handleFormSubmit(formData);
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
              <AnimatedText text="Let's Work Together" textStyle="h2 text-center xl:text-left mb-12" />
              {/** form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[480px]">
                {/** firstname and lastname */}
                <div className="flex gap-8">
                  {/** firstname */}
                  <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-primary" htmlFor="firstname">First Name <span className="text-accent">*</span></label>
                    <input onChange={handleChange} type="text" id="firstname" name="firstname" placeholder="First Name" className="input" required value={formData.firstname} />
                  </div>
                  {/** lastname */}
                  <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-primary" htmlFor="lastname">Last Name <span className="text-accent">*</span></label>
                    <input onChange={handleChange} type="text" id="lastname" name="lastname" placeholder="Last Name" className="input" required value={formData.lastname} />
                  </div>
                </div>
                {/** Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-primary" htmlFor="email">Email <span className="text-accent">*</span></label>
                  <input onChange={handleChange} type="text" id="email" name="email" placeholder="youremail@email.com" className="input" required value={formData.email} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                {/** Phone */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-primary" htmlFor="phone">Phone Number <span className="text-accent">*</span></label>
                  <input onChange={handleChange} type="text" id="phone" name="phone" placeholder="+1 (555) 123 4567" className="input" required value={formData.phone} />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                 {/** Message */}
                 <div>
                  <label className="block mb-2 text-sm font-medium text-primary" htmlFor="message">Message <span className="text-accent">*</span></label>
                  <textarea onChange={handleChange} id="message" name="message" placeholder="Leave me a message..." className="textarea" required value={formData.message} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                {/** Submit Button */}
                <button type="submit" disabled={state.submitting} className="btn btn-accent flex justify-center items-center gap-2">
                  {state.submitting ? (
                    <span>Sending</span>
                  ) : (
                    <>
                      <FaCheckCircle className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"}`} />
                      <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>Send Message</span>
                    </>
                  )
                }
                </button>
              </form>
            </div>
            <div className="hidden xl:flex relative w-[577px] rounded-lg overflow-hidden h-[664px]">
              <Image src="/assets/contact/img.png" fill quality={100} alt="" className="object-conver" />
            </div>
          </div>
        </div>
    </section>
  )
}
