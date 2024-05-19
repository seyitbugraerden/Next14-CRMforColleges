"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import { Profile as ProfileType } from "@/types/profile";

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType[]>([
    {
      name: "Jhon Doe",
      desk: "Student",
      phone: "Jhon Doe",
      date: "Jhon Doe",
      entryLocation: "Jhon Doe",
      currentLocation: "Jhon Doe",
      class: "Jhon Doe",
    },
  ]);
  const handleChange = (index: number, field: string, value: string) => {
    setProfile((prevProfile) => {
      const updatedProfiles = [...prevProfile];
      updatedProfiles[index] = { ...updatedProfiles[index], [field]: value };
      return updatedProfiles;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Profile" />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark ">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src={"/images/cover/cover-01.png"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              width={970}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          {profile.map((item, index) => (
            <div
              className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5"
              key={index}
            >
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <Image
                    src={"/images/user/user-06.png"}
                    width={160}
                    height={160}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-1 text-2xl font-semibold text-black dark:text-white">
                  {item.name}
                </h3>
                <p className="font-medium">{item.desk}</p>
                <div className="grid grid-cols-2 gap-x-5 px-12 gap-y-3 mt-3">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Adı Soyadı</span>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Telefon Numarası</span>
                    <input
                      type="text"
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                      value={item.phone}
                      onChange={(e) =>
                        handleChange(index, "phone", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Kayıt Tarihi</span>
                    <input
                      type="text"
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                      value={item.date}
                      onChange={(e) =>
                        handleChange(index, "date", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Kayıt Şubesi</span>
                    <input
                      type="text"
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                      value={item.entryLocation}
                      onChange={(e) =>
                        handleChange(index, "entryLocation", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Okul</span>
                    <input
                      type="text"
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                      value={item.currentLocation}
                      onChange={(e) =>
                        handleChange(index, "currentLocation", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-xs">Sınıf</span>
                    <input
                      type="text"
                      className="px-3 py-2 w-full border-[1px] focus:outline-none focus:bg-[#fafafa]"
                      value={item.class}
                      onChange={(e) =>
                        handleChange(index, "class", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end mx-10">
                  <button className="px-3 py-2 bg-primary text-white mt-8 relative right-0">
                    Güncelle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
