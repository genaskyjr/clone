import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-8 text-center bg-[#2323fd] text-white font-bold">
        <p className="">30% OFF if you order in the next 06 19</p>
      </div>

      <div className="brand bg-white h-18 flex justify-center items-center">
        <div>
          <Image
            src="/logo.avif"
            width={220}
            height={220}
            alt=""
          />
        </div>
      </div>

      

      <div className="h-[700px] bg-[url(/background.jpg)] bg-no-repeat bg-cover relative bg-gray-500 bg-blend-multiply">

        <div className="flex justify-center items-center flex-col absolute top-0 bottom-0 left-0 right-0">
          <div className="text-white text-4xl font-bold">Your Doctor's Note</div>
          <div className="text-white text-4xl font-bold mt-3">In 1 Minute, for $29,99!</div>
          <div className="line mt-4">
          <Image
            src="/line.svg"
            width={500}
            height={500}
            alt=""
          />
          </div>
          <div className="button mt-5">
              <button className="bg-[#3030ff] hover:bg-[#3030ffdb] text-white font-semibold px-8 py-2 rounded-lg ">Get you Note Now <span></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
          <div className="risk flex mt-4">
            <Image
              src="/secured.svg"
              width={30}
              height={30}
              alt=""
            />
            <div className="text-white font-semibold text-xs flex items-center ">100% Risk-Free Money Back Guarantee</div>
          </div>
        </div>
        
      </div>


      <div className="py-5 flex justify-center">
        <div className="max-w-5xl">
          <div className="text-4xl font-semibold text-center">Get An Online Doctor's</div>
          <div className="text-4xl font-semibold mt-2 text-center">Note In 3 Easy Steps</div>
          <div className="text-md mt-2 max-w-5xl">With our online platform we make it quick and simple for you to obtain a <br></br>doctors note, so you can focus on rest and recovery.</div>
        </div>
      </div>

     
  
      <div className="flex justify-between max-w-4xl  mx-auto">

        <div className="bg-[#dae9fd] p-5 max-w-2xs rounded-lg">
          <div className="image flex justify-center">
            <Image
              src="/1stImage.webp"
              width={200}
              height={200}
              alt=""
            />
          </div>

          <div className="text-center font-semibold">
            Fill In The Smart Form
          </div>


          <div className="description text-md mt-2">Indicate your illness and the desired duration. It's quick and intuitive.</div>
        </div>
        <div className="bg-[#dae9fd] p-5 max-w-2xs rounded-lg">
          <div className="image flex justify-center">
            <Image
              src="/1stImage.webp"
              width={200}
              height={200}
              alt=""
            />
          </div>

          <div className="text-center font-semibold ">
          Receive Your PDF In 1 Minute
          </div>


          <div className="description text-md mt-2 ">After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.</div>
        </div>
        <div className="bg-[#dae9fd] p-5 max-w-2xs rounded-lg">
          <div className="image flex justify-center">
            <Image
              src="/1stImage.webp"
              width={200}
              height={200}
              alt=""
            />
          </div>

          <div className="text-center font-semibold">
          100% Satisfaction Guarantee
          </div>


          <div className="description text-md mt-2">Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!</div>
        </div>
      </div>


      <div className="flex justify-center flex-col place-items-center">
        <div className="button mt-5">
              <button className="bg-[#3030ff] hover:bg-[#3030ffdb] text-white font-semibold px-8 py-2 rounded-lg ">Get you Note Now <span></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
        </div>


        <div className="risk flex mt-4">
          <Image
            src="/secured.svg"
            width={30}
            height={30}
            alt=""
          />
          <div className="text-gray-500 font-semibold text-xs flex items-center">100% Risk-Free Money Back Guarantee</div>
        </div>
      </div>




      <div className="bg-[#b9eedf] flex justify-center max-w-4xl rounded-lg mx-auto p-5 mt-5">
        <div className="image">
          <Image
            src="/armor.svg"
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </div>
        <div className=" flex flex-col justify-center pl-5">
          <div className="font-semibold mb-1 text-2xl">Money Back Guarantee!</div>
          <div className="font-medium">We will refund 100% of your payment, in case you're not 100% satisfied with our service.</div>
        </div>
        
      </div>




      <div className="py-5 flex justify-center">
        <div className="max-w-5xl">
          <div className="text-4xl font-semibold text-center">Get Peace of Mind </div>
          <div className="text-center">

            <div className="inline-block text-4xl font-semibold pr-2">With </div>
            <div className="inline-block text-4xl font-semibold text-[#3333fd] relative">My Doctors <div className="absolute  w-full"><Image
            src="/blackline.svg"
            width={500}
            height={500}
            alt=""
          /></div></div>
            <div className="inline-block text-4xl font-semibold pl-2 ext-[#3333fd]">Note</div>
          </div>
          
          <div className="text-md mt-2 text-gray-500">My Doctor’s Note provides a fast, hassle-free solution for<br></br> obtaining excuse notes. Focus on your recovery while we<br></br> take care of the paperwork, delivering your note in minutes.</div>
        </div>
      </div>


      
      <div className="grid grid-cols-2 max-w-4xl mx-auto gap-4">
        <div className=" bg-[#d9e9fe] p-5 rounded-md">
          <div className="font-semibold mb-5">Trusted by Thousands Across the USA</div>
          <ul className="list-disc pl-4">
            <li><p className="font-semibold inline-block">Professional & Reliable – </p><span className="text-sm text-gray-700"> Includes key medical absence details in a format widely recognized by workplaces..</span></li>
            <li><p className="font-semibold inline-block">Essential Information Included -  </p><span className="text-sm text-gray-700"> Clearly structured while protecting your privacy.</span></li>
            <li><p className="font-semibold inline-block">Instant & Hassle-Free – </p><span className="text-sm text-gray-700"> No appointments, no waiting. Receive your document within seconds via email.</span></li>
            
          </ul>
          <div className="grid grid-cols-3 mt-4 pl-4">
              <div>
                <Image
                  src="/walmart.svg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="/fedex.svg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="/startbucks.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
          </div>

        </div>


        <div className=" bg-[#d9e9fe] p-5 rounded-md">
          <div className="font-semibold mb-5">Get Your Note In Under 1 Minute</div>
          <ul className="list-disc pl-4">
            <li><p className="font-semibold inline-block">Skip the Wait – </p><span className="text-sm text-gray-700"> No appointments, no delays. Get what you need instantly, anytime.</span></li>
            <li><p className="font-semibold inline-block">Available 24/7 – </p><span className="text-sm text-gray-700"> No need to schedule weeks in advance. Access your document on demand, day or night.</span></li>
            <li><p className="font-semibold inline-block">Instant Email Delivery – </p><span className="text-sm text-gray-700"> Receive your note directly in your inbox, ready to use.</span></li>
          </ul>
         

        </div>


        <div className=" bg-[#d9e9fe] p-5 rounded-md">
          <div className="font-semibold mb-5">Customer Support That Puts You First</div>
          <ul className="list-disc pl-4">
            <li><p className="font-semibold inline-block">Adjustable to Your Needs – </p><span className="text-sm text-gray-700"> Easily modify details to match your situation.</span></li>
            <li><p className="font-semibold inline-block">Always Here for You –  </p><span className="text-sm text-gray-700"> Get assistance whenever you need it, day or night.</span></li>
            <li><p className="font-semibold inline-block">Real People, Real Support – </p><span className="text-sm text-gray-700"> Our team is here to help, every step of the way.</span></li>
            
          </ul>
          <div className="grid grid-cols-2 mt-4 pl-4">
              <div>
                <Image
                  src="/imagescircles.png"
                  width={180}
                  height={180}
                  alt="Picture of the author"
                />
              </div>
              <div className="font-semibold text-[#00c48c] flex items-center">
                We're ready to help!
              </div>

          </div>

        </div>


        
        <div className=" bg-[#d9e9fe] p-5 rounded-md">
            <div className="font-semibold mb-5 text-center">The Best Price In The Market</div>

            <div className="font-semibold mb-5 text-center text-gray-600"><del>$42.99</del></div>

            <div className="font-semibold mb-5 text-center text-4xl">$29.99</div>
          
            <div className="font-semibold text-[#00c48c] text-center">30% Discount - Limited Time!</div>

          </div>

      </div>




      <div className="flex justify-center flex-col place-items-center ">
        <div className="button mt-5">
              <button className="bg-[#3030ff] hover:bg-[#3030ffdb] text-white font-semibold px-8 py-2 rounded-lg ">Get your Doctors Note Now <span></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
        </div>


        <div className="risk flex mt-3">
          <Image
            src="/secured.svg"
            width={30}
            height={30}
            alt=""
          />
          <div className="text-gray-500 text-sm font-semibold flex items-center">100% Risk-Free Money Back Guarantee</div>
        </div>
      </div>


      <hr className="text-gray-300 mt-5"></hr>

      

      <div className="grid grid-cols-4 gap-12 mt-4 pl-4 max-w-4xl mx-auto">
          <div className="">
            <Image
              src="/note.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="mb-4"
            />
            <div className="text-xs mb-4 "><span className="font-semibold ">Support</span> (Mon-Fri, 9am-6pm EST)</div>
            <div className="text-xs"><span className="font-semibold">Email:</span> help@urgentsupport.co</div>
          </div>

          <div className="grid gap-4">
            <div className="text-xs font-semibold">Customer service</div>
            <div className="text-xs"> Contact Us</div>
            <div className="text-xs">Refund Request</div>
            <div className="text-xs">Frequently Asked Questions</div>
          </div>

          <div className="grid gap-4">
            <div className="text-xs font-semibold">Policies</div>
            <div className="text-xs">Terms Of Service </div>
            <div className="text-xs">Refund Policy </div>
            <div className="text-xs">Privacy Policy </div>
            <div className="text-xs">Disclaimer Policy </div>
            <div className="text-xs">Intellectual Property Policy </div>
            <div className="text-xs">Jurisdiction Policy </div>
            <div className="text-xs">Limitation of Liability Policy </div>
            <div className="text-xs">Indemnification Policy </div>
          </div>


          <div className="">
            <div className="text-xs font-semibold mb-5">Company Details</div>
            <div className="text-xs font-medium mb-2">COMPANY NAME & ADDRESS</div>
            <div className="text-xs">Company registration number: 000000</div>
          </div>

      </div>


      <hr className="text-gray-300 mt-5"></hr>

      
      <div className="py-5 text-xs font-semibold text-center">© 2025, My Doctors Note </div>

    </>



  );
}
