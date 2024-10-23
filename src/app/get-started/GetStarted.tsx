'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaDribbble, FaPinterest, FaLinkedin, FaUser, FaGithub, FaKhanda, FaGoogle, FaCodepen, FaStackOverflow } from 'react-icons/fa';
import axios from 'axios';

// Mock function for school options (replace with actual API call)
const getSchoolOptions = (inputValue: string) => {
  // This should be replaced with an actual API call to get school options
  return [
    { value: 'McDonough High School', label: 'McDonough High School' },
    { value: 'Other High School', label: 'Other High School' },
  ].filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
};

// Add a new interface for school options
interface SchoolOption {
  value: string;
  label: string;
}

// Add this mock data at the top of your file, outside of the component
const mockSchoolData = [
  { ncessch: "010000100114", school_name: "ALABAMA SCHOOL OF FINE ARTS" },
  { ncessch: "010000200596", school_name: "BOOKER T. WASHINGTON MAGNET HIGH SCHOOL" },
  { ncessch: "010000400134", school_name: "BALDWIN ARTS AND ACADEMICS MAGNET" },
  { ncessch: "010000400703", school_name: "BREWBAKER TECHNOLOGY MAGNET HIGH SCHOOL" },
  { ncessch: "010000500720", school_name: "JEFFERSON COUNTY INTERNATIONAL BACCALAUREATE SCHOOL" },
];

export default function GetStarted() {
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    role: '',
    school: '',
    website: '',
    github: '',
    khanAcademy: '',
    googleScholar: '',
    codePen: '',
    linkedin: '',
    stackOverflow: '',
    instagram: '',
    x: '',
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [schoolOptions, setSchoolOptions] = useState<SchoolOption[]>([]);
  const [schoolSearchTerm, setSchoolSearchTerm] = useState('');
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolSearchTerm(e.target.value);
    setProfile({ ...profile, school: e.target.value });
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile({ ...profile, role: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, including saving to Firebase
    console.log('Profile data:', profile);
    console.log('Profile image:', profileImage);
    // Add Firebase saving logic here
  };

  // New function to fetch school options
  const fetchSchoolOptions = async (searchTerm: string) => {
    if (searchTerm.length < 3) return;

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const filteredSchools = mockSchoolData.filter(school => 
      school.school_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const schools = filteredSchools.map(school => ({
      value: school.ncessch,
      label: school.school_name
    }));

    setSchoolOptions(schools);
  };

  // Use effect to trigger school search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (schoolSearchTerm.length >= 3) {
        fetchSchoolOptions(schoolSearchTerm);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [schoolSearchTerm]);

  const handleSchoolSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSchoolSearchTerm(searchTerm);
    setIsSchoolDropdownOpen(true);
    if (searchTerm.length >= 3) {
      fetchSchoolOptions(searchTerm);
    } else {
      setSchoolOptions([]);
    }
  };

  const handleSchoolSelect = (school: SchoolOption) => {
    setProfile({ ...profile, school: school.label });
    setSchoolSearchTerm(school.label);
    setIsSchoolDropdownOpen(false);
  };

  return (
    <div className="area">
      <ul className="circles">
        {[...Array(10)].map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 w-1/4">
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-semibold">Get Started</h1>
          </div>
          <div className="flex justify-center mb-6">
            <div 
              className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              onClick={handleImageClick}
            >
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <FaUser className="text-gray-400 text-4xl" />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Full Name*</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-500/15 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Role*</label>
              <select
                name="role"
                value={profile.role}
                onChange={handleRoleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              >
                <option value="">Select a role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-gray-700">School*</label>
              <input
                type="text"
                name="school"
                value={schoolSearchTerm}
                onChange={handleSchoolSearchChange}
                onFocus={() => setIsSchoolDropdownOpen(true)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-500/15 p-2"
                placeholder="Search for a school"
                required
              />
              {isSchoolDropdownOpen && schoolOptions.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {schoolOptions.map((option) => (
                    <li
                      key={option.value}
                      className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                      onClick={() => handleSchoolSelect(option)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="text"
                name="website"
                value={profile.website}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-500/15 p-1"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Social Links</label>
              {[
                { name: 'github', icon: FaGithub, placeholder: 'GitHub URL' },
                { name: 'khanAcademy', icon: FaKhanda, placeholder: 'Khan Academy URL' },
                { name: 'googleScholar', icon: FaGoogle, placeholder: 'Google Scholar URL' },
                { name: 'codePen', icon: FaCodepen, placeholder: 'CodePen URL' },
                { name: 'linkedin', icon: FaLinkedin, placeholder: 'LinkedIn URL' },
                { name: 'stackOverflow', icon: FaStackOverflow, placeholder: 'Stack Overflow URL' },
              ].map((social) => (
                <div key={social.name} className="flex items-center mb-2">
                  <social.icon className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name={social.name}
                    value={profile[social.name as keyof typeof profile]}
                    onChange={handleChange}
                    placeholder={social.placeholder}
                    className="flex-1 rounded-md border-gray-300 shadow-sm p-1"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md shadow-sm hover:bg-green-600">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .area {
          background: #49D470;  
          background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
          width: 100%;
          height: 100vh;
          position: relative;
        }

        .circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.2);
          animation: animate 25s linear infinite;
          bottom: -150px;
        }

        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .circles li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
        }

        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }

        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
        }

        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
        }

        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
        }

        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
        }

        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
        }

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
