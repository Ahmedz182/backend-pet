import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-gray-900">PetMe!</span>
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At PetME, our mission is to connect loving families with homeless pets in need of forever homes. 
          Since our founding in 2020, we have been dedicated to providing the highest level of care and 
          support to animals while they await their new families.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
        <p className="text-lg text-gray-700 mb-6">
          We believe every pet deserves a chance at a happy and healthy life. Our team works tirelessly to 
          ensure that each animal receives the necessary medical care, nutrition, and attention to thrive. 
          We collaborate with a network of shelters and rescue groups to facilitate adoptions and support 
          ongoing animal welfare initiatives.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li className="mb-2">
            <span className="font-semibold text-gray-900">Rescue and Rehabilitation:</span> We rescue pets 
            from shelters, streets, and unsafe environments, providing them with medical treatment, rehabilitation, and love.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-gray-900">Adoption Services:</span> We match pets with 
            loving families through our comprehensive adoption process, ensuring that each pet finds the perfect home.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-gray-900">Community Outreach:</span> Through educational programs 
            and events, we promote responsible pet ownership and animal welfare awareness within the community.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-gray-900">Support and Resources:</span> We offer resources and 
            support for new pet owners, including training tips, health care guidance, and ongoing assistance to ensure successful adoptions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h2>
        <p className="text-lg text-gray-700 mb-6">
          Thanks to the support of our community, we have successfully placed thousands of pets into loving homes. 
          Each adoption story is a testament to the compassion and dedication of our team and supporters.
        </p>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Join us in making a difference, one pet at a time. Together, we can ensure that every animal has a 
            chance to live a happy and fulfilling life.
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-6">
            For more information, visit our website or contact us page.
          </p>
          <a 
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Visit Our Pet Adoption Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;
